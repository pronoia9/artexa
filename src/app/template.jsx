'use client';

import { Footer, SmoothScroll } from '@/components';

export default function Template({ children }) {
  return (
    <SmoothScroll $justify='space-between'>
      {children}
      <Footer />
    </SmoothScroll>
  );
}
