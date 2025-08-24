import Link from 'next/link';
import { 
  ChevronLeft, 
  ChevronRight, 
  ChevronsLeft, 
  ChevronsRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  basePath: string;
  queryParams?: Record<string, string>;
};

export default function Pagination({ 
  currentPage, 
  totalPages, 
  basePath,
  queryParams = {}
}: PaginationProps) {
  if (totalPages <= 1) {
    return null;
  }
  
  const getQueryString = (params: Record<string, string>) => {
    const search = new URLSearchParams(params).toString();
    return search ? `?${search}` : '';
  };
  
  const getPageUrl = (page: number) => {
    const params = { ...queryParams };
    if (page === 1) {
        const { page: _, ...restParams } = params;
        return `${basePath}${getQueryString(restParams)}`;
    }
    
    return `${basePath}${getQueryString({ ...params, page: page.toString() })}`;
  };
  
  const getPageRange = () => {
    const delta = 2;
    const range = [];
    
    range.push(1);
    
    let start = Math.max(2, currentPage - delta);
    let end = Math.min(totalPages - 1, currentPage + delta);
    
    if (end - start < 2 * delta) {
      start = Math.max(2, end - 2 * delta);
      end = Math.min(totalPages - 1, start + 2 * delta);
    }
    
    if (start > 2) {
      range.push('ellipsis-start');
    }
    
    for (let i = start; i <= end; i++) {
      range.push(i);
    }
    
    if (end < totalPages - 1) {
      range.push('ellipsis-end');
    }
    
    if (totalPages > 1) {
      range.push(totalPages);
    }
    
    return range;
  };
  
  const pageRange = getPageRange();
  
  return (
    <nav className="flex justify-center items-center space-x-1" aria-label="Pagination">
      <Link href={getPageUrl(1)} passHref>
        <Button
          variant="ghost"
          size="icon"
          className="hidden sm:flex"
          disabled={currentPage === 1}
          aria-label="First page"
        >
          <ChevronsLeft className="h-4 w-4" />
        </Button>
      </Link>
      
      <Link href={getPageUrl(Math.max(1, currentPage - 1))} passHref>
        <Button
          variant="ghost"
          size="icon"
          disabled={currentPage === 1}
          aria-label="Previous page"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
      </Link>
      
      <div className="flex items-center space-x-1">
        {pageRange.map((page, index) => {
          if (page === 'ellipsis-start' || page === 'ellipsis-end') {
            return (
              <span key={`${page}-${index}`} className="px-3 py-2 text-gray-500">
                …
              </span>
            );
          }
          
          const pageNum = page as number;
          return (
            <Link key={pageNum} href={getPageUrl(pageNum)} passHref>
              <Button
                variant={currentPage === pageNum ? 'default' : 'ghost'}
                size="icon"
                className="h-9 w-9"
                aria-current={currentPage === pageNum ? 'page' : undefined}
                aria-label={`Page ${pageNum}`}
              >
                {pageNum}
              </Button>
            </Link>
          );
        })}
      </div>
      
      <Link href={getPageUrl(Math.min(totalPages, currentPage + 1))} passHref>
        <Button
          variant="ghost"
          size="icon"
          disabled={currentPage === totalPages}
          aria-label="Next page"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </Link>
      
      <Link href={getPageUrl(totalPages)} passHref>
        <Button
          variant="ghost"
          size="icon"
          className="hidden sm:flex"
          disabled={currentPage === totalPages}
          aria-label="Last page"
        >
          <ChevronsRight className="h-4 w-4" />
        </Button>
      </Link>
    </nav>
  );
}