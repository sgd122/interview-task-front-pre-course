import styled from '@emotion/styled';

import { theme } from '@/styles/theme';

/** 📌 `CountText` (할 일 개수 표시) */
export const CountText = styled.p`
  padding-left: 16px;
`;

export const EmptyText = styled.p`
  ${theme.typography.body1};
  color: ${theme.palette.textPlaceholder};
  text-align: center;
  margin-top: 16px;
`;
