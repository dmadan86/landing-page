export interface PostAuthor {
  name: string;
  firstName?: string;
  lastName?: string;
  avatar?: {
    url: string;
  };
}

export interface PostCategory {
  id: string;
  name: string;
  slug: string;
  count?: number;
}

export interface PostTag {
  id: string;
  name: string;
  slug: string;
  count?: number;
}

export interface FeaturedImage {
  sourceUrl: string;
  altText?: string;
  mediaDetails?: {
    width: number;
    height: number;
  };
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  date: string;
  modified: string;
  content: string;
  excerpt: string;
  featuredImage?: {
    node: FeaturedImage;
  };
  categories: {
    edges: Array<{
      node: PostCategory;
    }>;
  };
  tags?: {
    edges: Array<{
      node: PostTag;
    }>;
  };
  author: {
    node: PostAuthor;
  };
}

export interface PageInfo {
  endCursor: string;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string;
}

export interface PostsResponse {
  edges: Array<{
    cursor: string;
    node: Post;
  }>;
  pageInfo: PageInfo;
}

export async function fetchAPI(
  query: string,
  { variables }: { variables?: any } = {}
) {
  try {
    const API_URL =
      process.env.WORDPRESS_API_URL || "https://blogs.digitalagents.io";
    const headers = { "Content-Type": "application/json" };

    const res = await fetch(`${API_URL}/graphql`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        query,
        variables,
      }),
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error(`WordPress API responded with status: ${res.status}`);
    }

    const json = await res.json();

    if (json.errors) {
      console.error("GraphQL Errors:", json.errors);
      throw new Error(
        "GraphQL Error: " + json.errors[0]?.message || "Unknown GraphQL error"
      );
    }

    return json.data;
  } catch (error) {
    console.error("WordPress API Error:", error);
    return null;
  }
}

export async function getAllPosts(first = 9, after: string | null = null) {
  const data = await fetchAPI(
    `
      query AllPosts($first: Int!, $after: String) {
        posts(first: $first, after: $after, where: { status: PUBLISH }) {
          pageInfo {
            endCursor
            hasNextPage
            hasPreviousPage
            startCursor
          }
          edges {
            cursor
            node {
              id
              date
              modified
              title
              slug
              excerpt
              featuredImage {
                node {
                  sourceUrl
                  altText
                  mediaDetails {
                    height
                    width
                  }
                }
              }
              categories {
                edges {
                  node {
                    id
                    name
                    slug
                  }
                }
              }
              tags {
                edges {
                  node {
                    id
                    name
                    slug
                  }
                }
              }
              author {
                node {
                  name
                  firstName
                  lastName
                  avatar {
                    url
                  }
                }
              }
            }
          }
        }
      }
      `,
    {
      variables: {
        first,
        after,
      },
    }
  );

  if (!data) {
    return { edges: [], pageInfo: { hasNextPage: false, endCursor: null } };
  }

  return data.posts;
}

export async function getPostBySlug(slug: string) {
  const data = await fetchAPI(
    `
      query PostBySlug($id: ID!) {
        post(id: $id, idType: SLUG) {
          id
          date
          modified
          title
          slug
          content
          excerpt
          featuredImage {
            node {
              sourceUrl
              altText
              mediaDetails {
                height
                width
              }
            }
          }
          categories {
            edges {
              node {
                id
                name
                slug
              }
            }
          }
          tags {
            edges {
              node {
                id
                name
                slug
              }
            }
          }
          author {
            node {
              name
              firstName
              lastName
              avatar {
                url
              }
            }
          }
        }
      }
      `,
    {
      variables: {
        id: slug,
      },
    }
  );

  return data?.post || null;
}

export async function getAllPostSlugs() {
  const data = await fetchAPI(
    `
      query AllPostSlugs {
        posts(first: 100, where: { status: PUBLISH }) {
          edges {
            node {
              slug
            }
          }
        }
      }
      `
  );

  return data?.posts?.edges?.map(({ node }: any) => node.slug) || [];
}

export async function getPostsByCategory(
  categorySlug: string,
  first = 9,
  after: string | null = null
) {
  const data = await fetchAPI(
    `
      query PostsByCategory($categorySlug: String!, $first: Int!, $after: String) {
        posts(
          first: $first, 
          after: $after, 
          where: { 
            categoryName: $categorySlug,
            status: PUBLISH 
          }
        ) {
          pageInfo {
            endCursor
            hasNextPage
            hasPreviousPage
            startCursor
          }
          edges {
            cursor
            node {
              id
              date
              modified
              title
              slug
              excerpt
              featuredImage {
                node {
                  sourceUrl
                  altText
                  mediaDetails {
                    height
                    width
                  }
                }
              }
              categories {
                edges {
                  node {
                    id
                    name
                    slug
                  }
                }
              }
              tags {
                edges {
                  node {
                    id
                    name
                    slug
                  }
                }
              }
              author {
                node {
                  name
                  firstName
                  lastName
                  avatar {
                    url
                  }
                }
              }
            }
          }
        }
      }
      `,
    {
      variables: {
        categorySlug,
        first,
        after,
      },
    }
  );

  if (!data) {
    return { edges: [], pageInfo: { hasNextPage: false, endCursor: null } };
  }

  return data.posts;
}

export async function getPostsByTag(
  tagSlug: string,
  first = 9,
  after: string | null = null
) {
  const data = await fetchAPI(
    `
      query PostsByTag($tagSlug: String!, $first: Int!, $after: String) {
        posts(
          first: $first, 
          after: $after, 
          where: { 
            tag: $tagSlug,
            status: PUBLISH 
          }
        ) {
          pageInfo {
            endCursor
            hasNextPage
            hasPreviousPage
            startCursor
          }
          edges {
            cursor
            node {
              id
              date
              modified
              title
              slug
              excerpt
              featuredImage {
                node {
                  sourceUrl
                  altText
                  mediaDetails {
                    height
                    width
                  }
                }
              }
              categories {
                edges {
                  node {
                    id
                    name
                    slug
                  }
                }
              }
              tags {
                edges {
                  node {
                    id
                    name
                    slug
                  }
                }
              }
              author {
                node {
                  name
                  firstName
                  lastName
                  avatar {
                    url
                  }
                }
              }
            }
          }
        }
      }
      `,
    {
      variables: {
        tagSlug,
        first,
        after,
      },
    }
  );

  if (!data) {
    return { edges: [], pageInfo: { hasNextPage: false, endCursor: null } };
  }

  return data.posts;
}

export async function getAllCategories() {
  const data = await fetchAPI(
    `
      query AllCategories {
        categories(first: 100) {
          edges {
            node {
              id
              name
              slug
              count
            }
          }
        }
      }
      `
  );

  return data?.categories?.edges?.map(({ node }: any) => node) || [];
}

export async function getAllTags() {
  const data = await fetchAPI(
    `
      query AllTags {
        tags(first: 100) {
          edges {
            node {
              id
              name
              slug
              count
            }
          }
        }
      }
      `
  );

  return data?.tags?.edges?.map(({ node }: any) => node) || [];
}

export async function searchPosts(query: string, first = 20) {
  const data = await fetchAPI(
    `
      query SearchPosts($query: String!, $first: Int!) {
        posts(
          first: $first,
          where: { 
            search: $query,
            status: PUBLISH 
          }
        ) {
          edges {
            node {
              id
              date
              modified
              title
              slug
              excerpt
              featuredImage {
                node {
                  sourceUrl
                  altText
                  mediaDetails {
                    height
                    width
                  }
                }
              }
              categories {
                edges {
                  node {
                    id
                    name
                    slug
                  }
                }
              }
              author {
                node {
                  name
                  firstName
                  lastName
                  avatar {
                    url
                  }
                }
              }
            }
          }
        }
      }
      `,
    {
      variables: {
        query,
        first,
      },
    }
  );

  return data?.posts?.edges?.map(({ node }: any) => node) || [];
}

export async function getRelatedPosts(
  postId: string,
  categorySlug: string,
  count = 3
) {
  const data = await fetchAPI(
    `
      query RelatedPosts($categorySlug: String!, $postId: ID!, $count: Int!) {
        posts(
          first: $count,
          where: { 
            categoryName: $categorySlug,
            notIn: [$postId],
            status: PUBLISH 
          }
        ) {
          edges {
            node {
              id
              date
              title
              slug
              excerpt
              featuredImage {
                node {
                  sourceUrl
                  altText
                }
              }
              categories {
                edges {
                  node {
                    id
                    name
                    slug
                  }
                }
              }
            }
          }
        }
      }
      `,
    {
      variables: {
        categorySlug,
        postId,
        count,
      },
    }
  );

  return data?.posts?.edges?.map(({ node }: any) => node) || [];
}
