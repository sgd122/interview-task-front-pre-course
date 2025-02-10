'use client';

import { CountText } from './styles';

import TodoItem from '@/components/ui/TodoItem';
import { useFilteredTodos } from '@/hooks/useFilteredTodos';
import type { TodoListProps } from '@/types/filter';

/**
 * 📌 `TodoListContainer` 컴포넌트
 *
 * 필터링된 할 일 목록을 렌더링하는 UI 컨테이너입니다.
 *
 * ---
 * 📋 **Props**:
 * - `filter` (필수): 할 일 필터 (`all`, `todo`, `done`)
 *
 * ---
 * 📤 **Return 값**:
 * - 할 일 목록 UI
 */
const TodoListContainer = ({ filter }: TodoListProps) => {
  const { filteredTodos } = useFilteredTodos({ filter });

  return (
    <div>
      <CountText>총 {filteredTodos.length}개</CountText>

      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoListContainer;
