import { useRecoilValue } from 'recoil';

import { todoListState } from '@/states/todoState';
import type { FilteredTodos, TodoListProps } from '@/types/filter';

/**
 * 📌 `useFilteredTodos` 커스텀 훅
 *
 * 할 일 목록을 필터링하는 훅입니다.
 *
 * ---
 * 📤 **Return 값**:
 * - `filteredTodos` (할 일 목록 필터링 결과)
 *
 * ---
 * 💡 **사용 예제**:
 * ```tsx
 * const { filteredTodos } = useFilteredTodos({ filter });
 * ```
 */
export const useFilteredTodos = ({ filter }: TodoListProps): FilteredTodos => {
  const todoList = useRecoilValue(todoListState);

  const filteredTodos = todoList.filter((todo) => {
    if (filter === 'all') return true;
    if (filter === 'todo') return !todo.completed;
    if (filter === 'done') return todo.completed;
  });

  return { filteredTodos };
};
