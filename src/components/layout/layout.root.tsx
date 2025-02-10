'use client';
import type React from 'react';

import { LayoutMain, LayoutRecoil } from '@/components/layout/index';

const LayoutRoot = ({ children }: { children: React.ReactNode }) => {
  return (
    <LayoutRecoil>
      <LayoutMain>{children}</LayoutMain>
    </LayoutRecoil>
  );
};

export default LayoutRoot;
