// src/react-cssprops.d.ts
import 'react';

declare module 'react' {
  interface CSSProperties {
    '--n'?: number | string;
    '--i'?: number | string;
    '--url'?: string;
    '--pos'?: string;
    '--n-items'?: number | string; // If you were to set this via React style prop
    // You can add other custom properties here if you set them via inline styles in JSX
    // For example, if you were to dynamically set --k from React:
    // '--k'?: number | string;
  }
}