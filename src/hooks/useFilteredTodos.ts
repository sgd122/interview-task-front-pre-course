import { useRecoilValue } from 'recoil';

import { todoListState } from '@/states/todoState';
import type { FilteredTodos, TodoListProps } from '@/types/filter';

/**
 * 📌 `useFilteredTodos` 커스텀 훅
 *
 * Recoil 상태에서 할 일 목록을 가져와 필터링하는 훅입니다.
 * `all`, `todo`, `done` 세 가지 필터 값을 기준으로 필터링된 목록을 반환합니다.
 *
 * ---
 * 📥 **매개변수 (Props)**:
 * - `filter` (`'all' | 'todo' | 'done'`): 필터링 기준
 *
 * ---
 * 📤 **반환값 (Return)**:
 * - `filteredTodos`: 필터링된 할 일 목록
 * - `count`: 필터링된 목록의 개수
 *
 * ---
 * 💡 **사용 예제**:
 * ```tsx
 * const { filteredTodos, count } = useFilteredTodos({ filter: 'todo' });
 * console.log(filteredTodos, count); // 완료되지 않은 할 일 목록과 개수 반환
 * ```
 */
export const useFilteredTodos = ({ filter }: TodoListProps): FilteredTodos => {
  const todoList = useRecoilValue(todoListState);

  const filteredTodos = todoList.filter((todo) => {
    if (filter === 'all') return true;
    if (filter === 'todo') return !todo.completed;
    if (filter === 'done') return todo.completed;
  });

  const count = filteredTodos.length;

  return { filteredTodos, count };
};
