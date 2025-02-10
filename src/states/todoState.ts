import { atom } from 'recoil';

import type { Todo } from '@/types/todo';

/**
 * 📌 `todoListState`
 *
 * 애플리케이션의 **할 일 목록(To-Do List)** 상태를 관리하는 Recoil Atom입니다.
 * - `id` (number): 할 일의 고유 ID
 * - `text` (string): 할 일의 내용
 * - `completed` (boolean): 완료 여부 (`true` = 완료, `false` = 미완료)
 *
 * ---
 * 📤 **Return 값 (State)**:
 * - `{ id: number; text: string; completed: boolean }[]`
 *   - `default: []` (초기 상태는 빈 배열)
 *
 * ---
 * 💡 **사용 예제**:
 * ```tsx
 * import { useRecoilState } from 'recoil';
 * import { todoListState } from '@/states/todoState';
 *
 * const [todoList, setTodoList] = useRecoilState(todoListState);
 * ```
 */
export const todoListState = atom<Todo[]>({
  key: 'todoListState',
  default: [],
});
