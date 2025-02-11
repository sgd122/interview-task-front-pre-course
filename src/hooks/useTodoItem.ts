import { useCallback } from 'react';
import { useSetRecoilState } from 'recoil';

import { MAX_UNDONE_TODOS } from '@/constants/todo';
import { todoListState } from '@/states/todoState';
import type { Todo } from '@/types/todo';
import { updateServerTodos } from '@/utils/client/updateServerTodos';

/**
 * 📌 `useTodoItem` 커스텀 훅
 *
 * `TodoItem`의 상태 및 이벤트 핸들러를 관리하는 커스텀 훅입니다.
 *
 * ---
 * 📤 **Return 값**:
 * - `toggleComplete` (function): 완료 상태 변경 함수
 * - `removeTodo` (function): 해당 할 일 삭제 함수
 *
 * ---
 * 💡 **사용 예제**:
 * ```tsx
 * const { toggleComplete, removeTodo } = useTodoItem({ id, completed });
 * ```
 */
export const useTodoItem = ({ id, completed }: Todo) => {
  const setTodoList = useSetRecoilState(todoListState);

  const toggleComplete = useCallback(() => {
    setTodoList((prev) => {
      const newTodos = prev.map((t) =>
        t.id === id ? { ...t, completed: !completed } : t
      );

      const undoneCount = newTodos.filter((todo) => !todo.completed).length;

      // ✅ 완료 → 미완료 변경 시 개수 제한 적용
      if (completed && undoneCount > MAX_UNDONE_TODOS) {
        alert(
          `처리가 안된 할 일은 최대 ${MAX_UNDONE_TODOS}개까지만 유지할 수 있습니다.`
        );
        return prev; // 변경 취소
      }

      updateServerTodos(newTodos); // ✅ 서버 업데이트
      return newTodos;
    });
  }, [id, completed]);

  const removeTodo = useCallback(() => {
    setTodoList((prev) => {
      const newTodos = prev.filter((t) => t.id !== id);
      updateServerTodos(newTodos);
      return newTodos;
    });
  }, [id]);

  return { toggleComplete, removeTodo };
};
