'use client';
import type { Theme } from '@emotion/react';
import { Global, ThemeProvider } from '@emotion/react';
import type React from 'react';

import { LayoutMain, LayoutRecoil } from '@/components/layout/index';
import { styles } from '@/styles/globals';
import { theme } from '@/styles/theme';

const LayoutRoot = ({ children }: { children: React.ReactNode }) => {
  return (
    <LayoutRecoil>
      <Global styles={styles} />
      <ThemeProvider theme={theme as Partial<Theme>}>
        <LayoutMain>{children}</LayoutMain>
      </ThemeProvider>
    </LayoutRecoil>
  );
};

export default LayoutRoot;
