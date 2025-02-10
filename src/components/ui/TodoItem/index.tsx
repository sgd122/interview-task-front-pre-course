'use client';

import { CheckboxButton, DeleteButton, ItemContainer, Text } from './styles';

import { useTodoItem } from '@/hooks/useTodoItem';
import { CheckIcon, CloseIcon } from '@/styles/icons';
import { theme } from '@/styles/theme';
import type { TodoItemProps } from '@/types/todo';

/**
 * 📌 `TodoItem` 컴포넌트
 *
 * 개별 할 일 아이템을 렌더링하는 컴포넌트입니다.
 * - 완료 체크 (CheckIcon), 삭제 기능 (CloseIcon) 제공
 * - `useTodoItem` 훅을 사용하여 상태를 관리합니다.
 *
 * ---
 * 📋 **Props**:
 * - `todo` (필수): 개별 할 일 객체 `{ id, text, completed }`
 *
 * ---
 * 📤 **Return 값**:
 * - 할 일 아이템 UI
 *
 * ---
 * 💡 **사용 예제**:
 * ```tsx
 * <TodoItem todo={{ id: 1, text: '코드 리팩토링 하기', completed: false }} />
 * ```
 */
const TodoItem = ({ todo }: TodoItemProps) => {
  const { toggleComplete, removeTodo } = useTodoItem(todo);

  return (
    <ItemContainer>
      {/* ✅ Check 버튼으로 완료 상태 변경 */}
      <CheckboxButton onClick={toggleComplete} completed={todo.completed}>
        <CheckIcon size={24} color={theme.palette.white} />
      </CheckboxButton>

      {/* ✅ 할 일 텍스트 */}
      <Text completed={todo.completed}>{todo.text}</Text>

      {/* ✅ Close 버튼으로 할 일 삭제 */}
      <DeleteButton onClick={removeTodo}>
        <CloseIcon size={24} color={theme.palette.textPlaceholder} />
      </DeleteButton>
    </ItemContainer>
  );
};

export default TodoItem;
