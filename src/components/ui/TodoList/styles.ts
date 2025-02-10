import styled from '@emotion/styled';

import { theme } from '@/styles/theme';

/** 📌 `CountText` (할 일 개수 표시) */
export const CountText = styled.p`
  padding-left: 16px;
`;

/** 📌 `ListContainer` (할 일 목록 컨테이너) */
export const ListContainer = styled.div`
  width: 100%;
  background: ${theme.palette.white};
  border-radius: 24px;
  padding: 32px;
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.12),
    0 0 6px rgba(0, 0, 0, 0.06);
`;
