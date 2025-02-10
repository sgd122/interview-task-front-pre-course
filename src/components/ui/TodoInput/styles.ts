import styled from '@emotion/styled';

import { theme } from '@/styles/theme';

export const InputContainer = styled.div`
  width: 100%;
  border-radius: 24px;
  background: ${theme.palette.inputBackground};
`;

export const Input = styled.input`
  width: 100%;
  padding: 32px;
  border: none;
  outline: none;
  background: transparent;
  ${theme.typography.body1}
  &::placeholder {
    color: ${theme.palette.textPlaceholder};
  }
`;
