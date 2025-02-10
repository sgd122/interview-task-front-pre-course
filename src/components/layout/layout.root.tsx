'use client';
import { Global, ThemeProvider } from '@emotion/react';
import type React from 'react';

import { LayoutMain } from '@/components/layout/index';
import { styles } from '@/styles/globals';
import { theme } from '@/styles/theme';

const LayoutRoot = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Global styles={styles} />
      <ThemeProvider theme={theme}>
        <LayoutMain>{children}</LayoutMain>
      </ThemeProvider>
    </>
  );
};

export default LayoutRoot;
