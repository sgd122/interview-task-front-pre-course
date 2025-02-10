'use client';
import styled from '@emotion/styled';
import type React from 'react';

import { theme } from '@/styles/theme';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 64px;
  width: 100%;
  min-height: 100vh;
`;

const Header = styled.h1`
  ${theme.typography.title1};
`;

const Content = styled.div`
  width: 100%;
  max-width: 737px;
`;

const LayoutMain = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <Header>To Do List</Header>
      <Content>{children}</Content>
    </Container>
  );
};

export default LayoutMain;
