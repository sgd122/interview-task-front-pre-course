import Head from 'next/head';
import type React from 'react';

import { LayoutRecoil, LayoutRoot } from '@/components/layout';
import { getTodos } from '@/utils/server/getTodos';

export const metadata = {
  title: 'myfair front pre-course',
  description: 'todolist',
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const initialTodos = await getTodos();
  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/pretendard/dist/web/static/pretendard.css"
        />
      </Head>
      <body>
        <LayoutRecoil initialTodos={initialTodos}>
          <LayoutRoot>{children}</LayoutRoot>
        </LayoutRecoil>
      </body>
    </html>
  );
};

export default RootLayout;
