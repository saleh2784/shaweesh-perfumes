'use client';
import { useEffect } from 'react';

export default function BootstrapClient() {
  useEffect(() => {
    // @ts-ignore: No types for this module, but we just need the side effects
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return null;
}
