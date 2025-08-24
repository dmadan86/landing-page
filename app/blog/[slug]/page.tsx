import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPostSlugs, getRelatedPosts } from '@/lib/wordpress-api';
import { formatBlogDate, calculateReadingTime, prepareHtmlContent } from '@/lib/blog-utils';
import ReadingProgress from '@/components/blog/reading-progress';
import ShareButtons from '@/components/blog/share-buttons';
import TableOfContents from '@/components/blog/table-of-contents';
import BlogCard from '@/components/blog/blog-card';
import NewsletterSignup from '@/components/blog/newsletter-signup';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug: string) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found | CoreSight Blog',
      description: 'The requested blog post could not be found.',
    };
  }
  
  const cleanExcerpt = post.excerpt ? post.excerpt.replace(/<[^>]*>?/gm, '') : '';
  
  return {
    title: `${post.title} | CoreSight Blog`,
    description: cleanExcerpt || 'Read this insightful article from CoreSight.',
    openGraph: {
      title: post.title,
      description: cleanExcerpt,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.modified,
      authors: [post.author?.node?.name || 'CoreSight'],
      images: post.featuredImage?.node?.sourceUrl ? [
        {
          url: post.featuredImage.node.sourceUrl,
          alt: post.featuredImage.node.altText || post.title,
        }
      ] : [],
    },
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    notFound();
  }
  
  const primaryCategory = post.categories?.edges?.length > 0 
    ? post.categories.edges[0].node 
    : null;

  const readingTime = calculateReadingTime(post.content);
  
  const enhancedContent = prepareHtmlContent(post.content);
  
  const relatedPosts = primaryCategory 
    ? await getRelatedPosts(post.id, primaryCategory.slug, 3)
    : [];

  return (
    <>
      {/* Reading Progress */}
      <ReadingProgress />
      
      {/* Article Header */}
      <header className="bg-white pt-12 pb-6">
        <div className="container mx-auto px-4 md:px-6">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-blue-600 mb-6 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to all posts
          </Link>
          
          <div className="max-w-4xl mx-auto">
            {/* Category */}
            {primaryCategory && (
              <Link href={`/blog/categories/${primaryCategory.slug}`} className="mb-4 inline-block">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full hover:bg-blue-200 transition-colors">
                  {primaryCategory.name}
                </span>
              </Link>
            )}
            
            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-6 leading-tight">
              {post.title}
            </h1>
            
            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-6 text-gray-500 mb-8">
              {/* Author */}
              <div className="flex items-center">
                {post.author?.node?.avatar?.url ? (
                  <Image 
                    src={post.author.node.avatar.url}
                    alt={post.author.node.name || 'Author'}
                    width={32}
                    height={32}
                    className="rounded-full mr-2"
                  />
                ) : (
                  <User className="h-5 w-5 mr-2" />
                )}
                <span>{post.author?.node?.name || 'CoreSight'}</span>
              </div>
              
              {/* Date */}
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>{formatBlogDate(post.date)}</span>
              </div>
              
              {/* Reading time */}
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>{readingTime} min read</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      {post.featuredImage?.node?.sourceUrl && (
        <section className="bg-white pb-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
                <Image
                  src={post.featuredImage.node.sourceUrl}
                  alt={post.featuredImage.node.altText || post.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Content */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto">
            {/* Left Sidebar - Social Sharing */}
            <div className="hidden lg:block lg:w-16">
              <div className="sticky top-24 space-y-4">
                <ShareButtons 
                  title={post.title}
                  url={`https://digitalagents.io/blog/${post.slug}`}
                  variant="vertical"
                  showLabel={true}
                />
              </div>
            </div>
            
            {/* Main Content */}
            <article className="lg:flex-1">
              <div className="prose prose-lg max-w-none">
                {/* Table of Contents (if content has headings) */}
                <TableOfContents content={post.content} className="mb-8" />
                
                {/* Content */}
                <div 
                  className="mt-8"
                  dangerouslySetInnerHTML={{ __html: enhancedContent }}
                />
                
                {/* Tags */}
                {post.tags?.edges?.length > 0 && (
                  <div className="mt-12 pt-6 border-t border-gray-100">
                    <h3 className="text-lg font-bold mb-4">Topics</h3>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.edges.map(({ node }: any) => (
                        <Link key={node.slug} href={`/blog/tags/${node.slug}`}>
                          <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors">
                            {node.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Mobile Sharing */}
                <div className="mt-10 lg:hidden">
                  <h3 className="text-lg font-bold mb-4">Share this post</h3>
                  <ShareButtons 
                    title={post.title}
                    url={`https://digitalagents.io/blog/${post.slug}`}
                    variant="horizontal"
                  />
                </div>
              </div>
              
              {/* Author Bio */}
              <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-100">
                <div className="flex items-start sm:items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    {post.author?.node?.avatar?.url ? (
                      <Image 
                        src={post.author.node.avatar.url}
                        alt={post.author.node.name || 'Author'}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-16 h-16 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full">
                        <User className="h-8 w-8" />
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold">{post.author?.node?.name || 'CoreSight'}</h3>
                    <p className="text-gray-600 mt-1">
                      {post.author?.node?.description || 'Content created by the CoreSight team, focused on AI-powered business solutions and digital transformation.'}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Newsletter */}
              <div className="mt-12">
                <NewsletterSignup 
                  title="Subscribe for more insights"
                  description="Join our newsletter to receive the latest articles and updates directly in your inbox."
                  variant="full-width"
                />
              </div>
            </article>
            
            {/* Right Sidebar - Table of Contents on desktop */}
            <div className="hidden xl:block xl:w-64">
              <div className="sticky top-24">
                <TableOfContents content={post.content} />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 text-center">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((post: any, index: number) => (
                  <BlogCard 
                    key={post.slug} 
                    post={post} 
                    index={index}
                    showExcerpt={false}
                    variant="compact"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}