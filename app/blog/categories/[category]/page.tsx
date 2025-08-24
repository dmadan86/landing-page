import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostsByCategory, getAllCategories, getAllTags } from '@/lib/wordpress-api';
import BlogCard from '@/components/blog/blog-card';
import BlogSearch from '@/components/blog/blog-search';
import CategoryBadge from '@/components/blog/category-badge';
import TagsCloud from '@/components/blog/tags-cloud';
import NewsletterSignup from '@/components/blog/newsletter-signup';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, FolderOpen } from 'lucide-react';

export async function generateStaticParams() {
  const categories = await getAllCategories();
  return categories
    .filter((cat: any) => cat.count && cat.count > 0)
    .map((cat: any) => ({
      category: cat.slug,
    }));
}

export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  const categories = await getAllCategories();
  const category = categories.find((cat: any) => cat.slug === params.category);
  
  if (!category) {
    return {
      title: 'Category Not Found | CoreSight Blog',
      description: 'The requested blog category could not be found.',
    };
  }
  
  return {
    title: `${category.name} | CoreSight Blog`,
    description: `Explore our articles about ${category.name.toLowerCase()} and learn how CoreSight can transform your business.`,
    openGraph: {
      title: `${category.name} | CoreSight Blog`,
      description: `Explore our articles about ${category.name.toLowerCase()} and learn how CoreSight can transform your business.`,
      type: 'website',
    },
  };
}

interface CategoryPageProps {
  params: { category: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const after = typeof searchParams.after === 'string' ? searchParams.after : null;
  
  const [postsData, categories, tags] = await Promise.all([
    getPostsByCategory(params.category, 9, after),
    getAllCategories(),
    getAllTags(),
  ]);
  
  const currentCategory = categories.find((cat: any) => cat.slug === params.category);
  
  if (!currentCategory) {
    notFound();
  }
  
  const categoryName = currentCategory.name;
  
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
              <FolderOpen className="h-5 w-5 mr-2" />
              <span className="font-medium">Category</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold font-display mb-4">{categoryName}</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Browse articles in the {categoryName.toLowerCase()} category
            </p>
            
            {/* Search Bar */}
            <div className="mt-8 max-w-xl mx-auto">
              <BlogSearch />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Navigation */}
      <section className="border-b border-gray-100 bg-white">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Link href="/blog">
              <Button variant="ghost" size="sm" className="rounded-full">
                All
              </Button>
            </Link>
            
            {categories
              .filter((cat: any) => cat.count && cat.count > 0)
              .map((category: any) => (
                <Link key={category.slug} href={`/blog/categories/${category.slug}`}>
                  <Button 
                    variant={category.slug === params.category ? "default" : "ghost"} 
                    size="sm"
                    className="rounded-full"
                  >
                    {category.name}
                  </Button>
                </Link>
              ))}
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
                    There are currently no posts in this category. Please check back soon or explore other categories.
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
                      <Link href={`/blog/categories/${params.category}?after=${pageInfo.endCursor}`}>
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
              {/* Other Categories */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold mb-4">More Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {categories
                    .filter((cat: any) => cat.slug !== params.category && cat.count && cat.count > 0)
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