import localFont from 'next/font/local';
import type React from 'react';

import { LayoutRecoil, LayoutRoot } from '@/components/layout';
import { getTodos } from '@/utils/server/getTodos';

export const metadata = {
  title: 'myfair front pre-course',
  description: 'todolist',
};

const pretendard = localFont({
  src: '../styles/fonts/PretendardVariable.woff2',
  display: 'swap',
  variable: '--font-pretendard',
});

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const initialTodos = await getTodos();
  return (
    <html lang="en" className={`${pretendard.variable}`}>
      <body>
        <LayoutRecoil initialTodos={initialTodos}>
          <LayoutRoot>{children}</LayoutRoot>
        </LayoutRecoil>
      </body>
    </html>
  );
};

export default RootLayout;
