/** 📌 `FilterType` 타입
 * - `all`: 모든 할 일 표시
 * - `todo`: 미완료된 할 일만 표시
 * - `done`: 완료된 할 일만 표시
 *
 * ---
 * 💡 **사용 예제**:
 * ```tsx
 * const filter: FilterType = 'todo'; // ✅ 가능
 * const filter: FilterType = 'invalid'; // ❌ 오류 발생
 * ```
 */
export type FilterType = 'all' | 'todo' | 'done';

/** 📌 `TodoListProps` */
export interface TodoListProps {
  filter: FilterType;
}

/** 📌 `FilteredTodos` 반환 타입 */
export interface FilteredTodos {
  filteredTodos: Todo[];
  count: number;
}
