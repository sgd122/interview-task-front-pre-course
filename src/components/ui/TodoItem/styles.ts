import styled from '@emotion/styled';

import { theme } from '@/styles/theme';

/** 📌 `ItemContainer` (할 일 아이템을 감싸는 컨테이너) */
export const ItemContainer = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 16px;
`;

/** 📌 `Checkbox` (완료 체크버튼 - Check SVG로 대체됨) */
export const CheckboxButton = styled.div<{ completed: boolean }>`
  width: 32px;
  height: 32px;
  border: 1px solid ${theme.palette.inputBackground};
  border-radius: 100px;
  cursor: pointer;
  margin-right: 16px;
  background-color: ${({ completed }) => (completed ? theme.palette.blue : theme.palette.white)};
  display: flex;
  align-items: center;
  justify-content: center;
`;

/** 📌 `Text` (할 일 텍스트) */
export const Text = styled.h3<{ completed: boolean }>`
  flex: 1;
  ${theme.typography.body1};
  color: ${({ completed }) => (completed ? theme.palette.textDone : theme.palette.black)};
`;

/** 📌 `DeleteButton` (삭제 버튼 - Close SVG로 대체됨) */
export const DeleteButton = styled.button`
  cursor: pointer;
`;
