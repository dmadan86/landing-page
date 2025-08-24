export function calculateReadingTime(content: string): number {
  if (!content) return 1;

  const text = content.replace(/<[^>]*>?/gm, "");

  const words = text.trim().split(/\s+/).length;
  const readingTime = Math.ceil(words / 225);

  return readingTime < 1 ? 1 : readingTime;
}

export function formatBlogDate(dateString: string): string {
  if (!dateString) return "";

  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    return "Invalid date";
  }

  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

export function getRelativeTime(dateString: string): string {
  if (!dateString) return "";

  const date = new Date(dateString);

  // Check if date is valid
  if (isNaN(date.getTime())) {
    return "Invalid date";
  }

  const now = new Date();
  const secondsAgo = Math.floor((now.getTime() - date.getTime()) / 1000);

  // Less than a minute
  if (secondsAgo < 60) {
    return "Just now";
  }

  // Less than an hour
  if (secondsAgo < 3600) {
    const minutes = Math.floor(secondsAgo / 60);
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  }

  // Less than a day
  if (secondsAgo < 86400) {
    const hours = Math.floor(secondsAgo / 3600);
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  }

  // Less than a week
  if (secondsAgo < 604800) {
    const days = Math.floor(secondsAgo / 86400);
    return `${days} day${days > 1 ? "s" : ""} ago`;
  }

  // Less than a month
  if (secondsAgo < 2592000) {
    const weeks = Math.floor(secondsAgo / 604800);
    return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
  }

  // Format as a regular date for older posts
  return formatBlogDate(dateString);
}

export function prepareHtmlContent(content: string): string {
  if (!content) return "";

  const contentWithTargetBlank = content.replace(
    /<a\s+(?:[^>]*?\s+)?href="(http[^"]*)"([^>]*)>/gi,
    (match, url, rest) => {
      if (url.includes("digitalagents.io")) {
        return `<a href="${url}"${rest}>`;
      }

      const hasTarget = /\starget=/i.test(rest);
      const hasRel = /\srel=/i.test(rest);

      let newRest = rest;
      if (!hasTarget) {
        newRest += ' target="_blank"';
      }
      if (!hasRel) {
        newRest += ' rel="noopener noreferrer"';
      }

      return `<a href="${url}"${newRest}>`;
    }
  );

  const contentWithResponsiveImages = contentWithTargetBlank.replace(
    /<img(.*?)>/gi,
    (match, attributes) => {
      if (attributes.includes("class=")) {
        return match.replace(/class="([^"]*)"/i, (classMatch, classes) => {
          return `class="${classes} rounded-lg max-w-full h-auto"`;
        });
      } else {
        return `<img${attributes} class="rounded-lg max-w-full h-auto">`;
      }
    }
  );

  const contentWithSpacing = contentWithResponsiveImages.replace(
    /<p>/gi,
    '<p class="mb-6">'
  );

  const contentWithHeadingStyles = contentWithSpacing
    .replace(
      /<h2>/gi,
      '<h2 class="text-2xl font-bold font-display mt-12 mb-6">'
    )
    .replace(/<h3>/gi, '<h3 class="text-xl font-bold font-display mt-10 mb-4">')
    .replace(/<h4>/gi, '<h4 class="text-lg font-bold font-display mt-8 mb-4">');

  const contentWithListStyles = contentWithHeadingStyles
    .replace(/<ul>/gi, '<ul class="list-disc pl-6 mb-6 space-y-2">')
    .replace(/<ol>/gi, '<ol class="list-decimal pl-6 mb-6 space-y-2">');

  const contentWithBlockquoteStyles = contentWithListStyles.replace(
    /<blockquote>/gi,
    '<blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 text-gray-700 italic">'
  );

  return contentWithBlockquoteStyles;
}

export function extractTableOfContents(content: string) {
  if (!content) return [];

  const headings: { id: string; text: string; level: number }[] = [];
  const headingRegex = /<h([2-4])(?:[^>]*)>(.*?)<\/h\1>/gi;

  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    const level = parseInt(match[1], 10);
    const text = match[2].replace(/<[^>]*>/g, "");
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");

    headings.push({ id, text, level });
  }

  return headings;
}

export function generateExcerpt(content: string, maxLength = 160): string {
  if (!content) return "";

  const text = content.replace(/<[^>]*>?/gm, "");

  if (text.length <= maxLength) return text;

  const breakPoint = text.lastIndexOf(" ", maxLength);
  return text.substring(0, breakPoint > 0 ? breakPoint : maxLength) + "...";
}

export function extractCategoriesFromPosts(
  posts: any[]
): { id: string; name: string; slug: string }[] {
  if (!posts || !posts.length) return [];

  const categoriesMap = new Map();

  posts.forEach((post) => {
    if (post.categories?.edges) {
      post.categories.edges.forEach(({ node }: any) => {
        if (!categoriesMap.has(node.id)) {
          categoriesMap.set(node.id, {
            id: node.id,
            name: node.name,
            slug: node.slug,
          });
        }
      });
    }
  });

  return Array.from(categoriesMap.values());
}

export function getShareUrls(title: string, url: string) {
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);

  return {
    twitter: `https://x.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`,
  };
}
