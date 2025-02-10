import Head from 'next/head';
import type React from 'react';

import { LayoutRoot } from '@/components/layout';

export const metadata = {
  title: 'myfair front pre-course',
  description: 'todolist',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/pretendard/dist/web/static/pretendard.css"
        />
      </Head>
      <body>
        <LayoutRoot>{children}</LayoutRoot>
      </body>
    </html>
  );
};

export default RootLayout;
