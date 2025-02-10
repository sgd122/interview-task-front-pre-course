'use client';

import { CountText, EmptyText } from './styles';

import TodoItem from '@/components/ui/TodoItem';
import { useFilteredTodos } from '@/hooks/useFilteredTodos';
import type { TodoListProps } from '@/types/filter';

/**
 * 📌 `TodoListContainer` 컴포넌트
 *
 * 필터링된 할 일 목록을 렌더링하는 UI 컨테이너입니다.
 * - `useFilteredTodos` 훅을 사용하여 필터링된 목록을 가져옵니다.
 * - 할 일이 없을 경우 `EmptyText`를 표시합니다.
 *
 * ---
 * 📋 **Props**:
 * - `filter` (`'all' | 'todo' | 'done'`): 필터 기준
 *
 * ---
 * 📤 **Return 값**:
 * - 필터링된 할 일 목록 UI
 */
const TodoListContainer = ({ filter }: TodoListProps) => {
  const { filteredTodos, count } = useFilteredTodos({ filter });
  const hasTodos = count > 0;

  return (
    <div>
      <CountText>총 {count}개</CountText>

      {!hasTodos ? (
        <EmptyText>목록이 존재하지 않습니다.</EmptyText>
      ) : (
        filteredTodos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      )}
    </div>
  );
};

export default TodoListContainer;
