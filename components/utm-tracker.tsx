"use client";

import { useEffect } from 'react';
import { storeUtmParams } from '@/lib/utm-utils';

export default function UtmTracker() {
  useEffect(() => {
    storeUtmParams();
  }, []);
  
  return null;
}