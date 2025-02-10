'use client';
import type React from 'react';
import { RecoilRoot } from 'recoil';

interface Props {
  children: React.ReactNode;
}

const LayoutRecoil = ({ children }: Props) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default LayoutRecoil;
