'use client';

import { useEffect, useState } from 'react';
import { FloatingChatButton } from '@/components/floating-chat-button';
import { Toaster } from 'sonner';
import LazyLoadInit from '@/components/lazy-load-init';

export default function ClientBody() {
  const [mounted, setMounted] = useState(false);

  // Handle hydration mismatch
  useEffect(() => {
    setMounted(true);

    // Remove any extension-added classes during hydration
    document.body.className = "antialiased";
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Toaster position="top-right" />
      <FloatingChatButton />
      <LazyLoadInit />
    </>
  );
}
