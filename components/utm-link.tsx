"use client";

import { ReactNode, useEffect } from 'react';
import NextLink from 'next/link';
import { storeUtmParams, createUtmUrl } from '@/lib/utm-utils';

interface UtmLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  [x: string]: any;
}

export default function UtmLink({ href, children, className, ...rest }: UtmLinkProps) {
  useEffect(() => {
    storeUtmParams();
  }, []);
  
  const processedHref = createUtmUrl(href);
  
  return (
    <NextLink href={processedHref} className={className} {...rest}>
      {children}
    </NextLink>
  );
}