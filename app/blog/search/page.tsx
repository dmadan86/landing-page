import { Metadata } from 'next';
import Link from 'next/link';
import { searchPosts, getAllCategories, getAllTags } from '@/lib/wordpress-api';
import BlogCard from '@/components/blog/blog-card';
import BlogSearch from '@/components/blog/blog-search';
import CategoryBadge from '@/components/blog/category-badge';
import TagsCloud from '@/components/blog/tags-cloud';
import NewsletterSignup from '@/components/blog/newsletter-signup';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Search } from 'lucide-react';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ searchParams }: { searchParams: { query: string } }): Promise<Metadata> {
  const query = searchParams.query || '';
  
  return {
    title: `Search: ${query} | CoreSight Blog`,
    description: `Search results for "${query}" in the CoreSight blog.`,
    robots: {
      index: false,
      follow: true,
    },
  };
}

interface SearchPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const searchQuery = typeof searchParams.query === 'string' ? searchParams.query.trim() : '';
  
  const [posts, categories, tags] = await Promise.all([
    searchQuery ? searchPosts(searchQuery) : [],
    getAllCategories(),
    getAllTags(),
  ]);

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
            {searchQuery ? (
              <>
                <div className="inline-flex items-center justify-center bg-blue-100 text-blue-700 p-2 rounded-full mb-4">
                  <Search className="h-5 w-5 mr-2" />
                  <span className="font-medium">Search Results</span>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold font-display mb-4">
                  {posts.length > 0 
                    ? `Found ${posts.length} result${posts.length === 1 ? '' : 's'}`
                    : 'No results found'
                  }
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  {posts.length > 0 
                    ? `Search results for "${searchQuery}"`
                    : `We couldn't find any posts matching "${searchQuery}". Try different keywords or browse our categories.`
                  }
                </p>
              </>
            ) : (
              <>
                <h1 className="text-3xl md:text-4xl font-bold font-display mb-4">
                  Search our blog
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
                  Enter keywords to find related articles and insights
                </p>
              </>
            )}
            
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
              {searchQuery && posts.length === 0 ? (
                <div className="text-center py-16 bg-gray-50 rounded-xl">
                  <h2 className="text-2xl font-bold mb-4">Suggestions</h2>
                  <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    Try searching with different keywords, checking your spelling, or browsing our categories.
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 max-w-lg mx-auto mb-8">
                    {categories
                      .filter((cat: any) => cat.count && cat.count > 0)
                      .slice(0, 6)
                      .map((category: any, index: number) => (
                        <CategoryBadge 
                          key={category.slug}
                          category={category}
                          size="md"
                          index={index}
                        />
                      ))}
                  </div>
                  <Link href="/blog">
                    <Button className="rounded-lg">
                      Browse all posts
                    </Button>
                  </Link>
                </div>
              ) : searchQuery ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                  {posts.map((post: any, index: number) => (
                    <BlogCard key={post.slug} post={post} index={index} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-gray-50 rounded-xl">
                  <h2 className="text-2xl font-bold mb-4">Enter search terms</h2>
                  <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    Use the search box above to find articles on specific topics.
                  </p>
                  <p className="text-gray-600 mb-8">Or explore our popular categories:</p>
                  <div className="flex flex-wrap justify-center gap-2 max-w-lg mx-auto mb-8">
                    {categories
                      .filter((cat: any) => cat.count && cat.count > 0)
                      .slice(0, 8)
                      .map((category: any, index: number) => (
                        <CategoryBadge 
                          key={category.slug}
                          category={category}
                          showCount
                          size="md"
                          index={index}
                        />
                      ))}
                  </div>
                </div>
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
              
              {/* Popular Tags */}
              <TagsCloud 
                tags={tags.filter((tag: any) => tag.count && tag.count > 0)}
                title="Popular Tags"
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