'use client';
import { Global } from '@emotion/react';
import styled from '@emotion/styled';
import type React from 'react';

import { styles } from '@/styles/globals';

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
  font-size: 56px;
  line-height: 72px;
  font-weight: bold;
`;

const Content = styled.div`
  width: 100%;
  max-width: 737px;
`;

const LayoutMain = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Global styles={styles} />
      <Container>
        <Header>To Do List</Header>
        <Content>{children}</Content>
      </Container>
    </>
  );
};

export default LayoutMain;
