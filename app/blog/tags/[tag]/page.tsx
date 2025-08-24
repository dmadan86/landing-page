import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostsByTag, getAllTags, getAllCategories } from '@/lib/wordpress-api';
import BlogCard from '@/components/blog/blog-card';
import BlogSearch from '@/components/blog/blog-search';
import CategoryBadge from '@/components/blog/category-badge';
import TagsCloud from '@/components/blog/tags-cloud';
import NewsletterSignup from '@/components/blog/newsletter-signup';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Tag } from 'lucide-react';

export async function generateStaticParams() {
  const tags = await getAllTags();
  return tags
    .filter((tag: any) => tag.count && tag.count > 0)
    .map((tag: any) => ({
      tag: tag.slug,
    }));
}

export async function generateMetadata({ params }: { params: { tag: string } }): Promise<Metadata> {
  const tags = await getAllTags();
  const tag = tags.find((t: any) => t.slug === params.tag);
  
  if (!tag) {
    return {
      title: 'Tag Not Found | CoreSight Blog',
      description: 'The requested blog tag could not be found.',
    };
  }
  
  return {
    title: `${tag.name} | CoreSight Blog`,
    description: `Explore our articles about ${tag.name.toLowerCase()} and learn how CoreSight can transform your business.`,
    openGraph: {
      title: `${tag.name} | CoreSight Blog`,
      description: `Explore our articles about ${tag.name.toLowerCase()} and learn how CoreSight can transform your business.`,
      type: 'website',
    },
  };
}

interface TagPageProps {
  params: { tag: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function TagPage({ params, searchParams }: TagPageProps) {
  const after = typeof searchParams.after === 'string' ? searchParams.after : null;
  
  const [postsData, tags, categories] = await Promise.all([
    getPostsByTag(params.tag, 9, after),
    getAllTags(),
    getAllCategories(),
  ]);
  
  const currentTag = tags.find((t: any) => t.slug === params.tag);
  
  if (!currentTag) {
    notFound();
  }
  
  const tagName = currentTag.name;
  
  const posts = postsData?.edges?.map(({ node }: any) => node) || [];
  
  const pageInfo = postsData?.pageInfo || { hasNextPage: false, endCursor: null };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-200 blur-3xl"></div>
          <div className="absolute bottom-0 -left-24 w-64 h-64 rounded-full bg-purple-200 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Link href="/blog" className="inline-flex items-center text-blue-600 mb-6 hover:text-blue-800 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to all posts
          </Link>
          
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center bg-blue-100 text-blue-700 p-2 rounded-full mb-4">
              <Tag className="h-5 w-5 mr-2" />
              <span className="font-medium">Tagged</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold font-display mb-4">{tagName}</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Browse articles related to {tagName.toLowerCase()}
            </p>
            
            {/* Search Bar */}
            <div className="mt-8 max-w-xl mx-auto">
              <BlogSearch />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-3/4">
              {posts.length === 0 ? (
                <div className="text-center py-16 bg-gray-50 rounded-xl">
                  <h2 className="text-2xl font-bold mb-4">No posts found</h2>
                  <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    There are currently no posts with this tag. Please check back soon or explore other topics.
                  </p>
                  <Link href="/blog">
                    <Button className="rounded-lg">
                      Browse all posts
                    </Button>
                  </Link>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                    {posts.map((post: any, index: number) => (
                      <BlogCard key={post.slug} post={post} index={index} />
                    ))}
                  </div>
                  
                  {/* Load More */}
                  {pageInfo.hasNextPage && (
                    <div className="mt-10 text-center">
                      <Link href={`/blog/tags/${params.tag}?after=${pageInfo.endCursor}`}>
                        <Button className="rounded-full px-8">
                          Load More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  )}
                </>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/4 space-y-8">
              {/* Popular Categories */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold mb-4">Popular Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {categories
                    .filter((cat: any) => cat.count && cat.count > 0)
                    .slice(0, 10)
                    .map((category: any, index: number) => (
                      <CategoryBadge 
                        key={category.slug}
                        category={category}
                        showCount={true}
                        size="sm"
                        index={index}
                      />
                    ))}
                </div>
              </div>
              
              {/* Related Tags */}
              <TagsCloud 
                tags={tags.filter((t: any) => t.slug !== params.tag && t.count && t.count > 0)}
                title="Explore More Topics"
                maxInitialTags={12}
              />
              
              {/* Newsletter Signup */}
              <NewsletterSignup />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}