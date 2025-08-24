import { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts, getAllCategories, getAllTags } from '@/lib/wordpress-api';
import BlogCard from '@/components/blog/blog-card';
import BlogSearch from '@/components/blog/blog-search';
import CategoryBadge from '@/components/blog/category-badge';
import TagsCloud from '@/components/blog/tags-cloud';
import PopularPosts from '@/components/blog/popular-posts';
import NewsletterSignup from '@/components/blog/newsletter-signup';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog | CoreSight',
  description: 'Insights, strategies, and the latest in AI-powered business automation.',
  openGraph: {
    title: 'Blog | CoreSight',
    description: 'Insights, strategies, and the latest in AI-powered business automation.',
    type: 'website',
    siteName: 'CoreSight Blog',
  },
};

interface BlogPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const after = typeof searchParams.after === 'string' ? searchParams.after : null;
  const postsPerPage = 9;
  
  const [postsData, categories, tags] = await Promise.all([
    getAllPosts(postsPerPage, after),
    getAllCategories(),
    getAllTags(),
  ]);
  
  const posts = postsData?.edges?.map(({ node }: any) => node) || [];
  const hasData = posts.length > 0;
  const featuredPost = hasData ? posts[0] : null;
  const regularPosts = hasData ? posts.slice(1) : [];  
  const pageInfo = postsData?.pageInfo || { hasNextPage: false, endCursor: null };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-200 blur-3xl"></div>
          <div className="absolute bottom-0 -left-24 w-64 h-64 rounded-full bg-purple-200 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">
              CoreSight Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Insights, strategies, and the latest in AI-powered business automation
            </p>
            
            {/* Search Bar */}
            <div className="max-w-xl mx-auto">
              <BlogSearch />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          {/* Categories */}
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            <CategoryBadge 
              category={{ name: 'All', slug: '' }}
              isActive={true}
              size="lg"
              index={0}
            />
            
            {categories
              .filter((cat: any) => cat.count && cat.count > 0)
              .slice(0, 8)
              .map((category: any, index: number) => (
                <CategoryBadge 
                  key={category.slug}
                  category={category}
                  showCount={true}
                  size="lg"
                  index={index + 1}
                />
              ))}
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              {/* Featured Post */}
              {featuredPost && (
                <div className="mb-12">
                  <BlogCard post={featuredPost} featured={true} />
                </div>
              )}

              {/* Regular Posts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {regularPosts.map((post: any, index: number) => (
                  <BlogCard key={post.slug} post={post} index={index} />
                ))}
              </div>

              {/* Load More */}
              {pageInfo.hasNextPage && (
                <div className="mt-10 text-center">
                  <Link href={`/blog?after=${pageInfo.endCursor}`}>
                    <Button className="rounded-full px-8 py-6 text-base" size="lg">
                      Load More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3 space-y-8">
              {/* Popular Posts */}
              <PopularPosts posts={posts} />
              
              {/* Tags Cloud */}
              <TagsCloud 
                tags={tags.filter((tag: any) => tag.count && tag.count > 0)}
                maxInitialTags={15}
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