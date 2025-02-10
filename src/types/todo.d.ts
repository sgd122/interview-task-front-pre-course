/**
 * 📌 `Todo` 타입
 *
 * 할 일(Todo) 객체의 타입을 정의합니다.
 * - `id` (number): 할 일의 고유 ID
 * - `text` (string): 할 일 내용
 * - `completed` (boolean): 완료 여부 (`true` = 완료, `false` = 미완료)
 *
 * ---
 * 📤 **사용 예제**:
 * ```tsx
 * import { Todo } from '@/components/Todo/types';
 *
 * const item: Todo = { id: 1, text: '코드 리팩토링', completed: false };
 * ```
 */
export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

/**
 * 📌 `TodoItemProps`
 *
 * `TodoItem` 컴포넌트에 전달될 Props 타입을 정의합니다.
 */
export interface TodoItemProps {
  todo: Todo;
}
