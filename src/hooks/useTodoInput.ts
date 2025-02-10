import { useCallback, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { todoListState } from '@/states/todoState';
import { updateServerTodos } from '@/utils/client/updateServerTodos';

const MAX_LENGTH = 20;
const MAX_UNDONE_TODOS = 10; // ✅ 미완료 할 일 최대 개수

/**
 * 📌 `useTodoInput` 커스텀 훅
 *
 * 할 일 입력을 관리하는 커스텀 훅입니다.
 * - 입력된 텍스트 상태를 관리하고,
 * - 최대 글자 수 제한(`maxLength`)을 적용하며,
 * - `Enter` 키 입력 시 새로운 할 일을 추가할 수 있습니다.
 * - **미완료(`completed: false`) 상태의 할 일이 10개를 초과할 수 없습니다.**
 *
 * ---
 * 📋 **Params**:
 * - `maxLength` (선택, 기본값: `20`): 입력할 수 있는 최대 글자 수입니다.
 *
 * ---
 * 📤 **Return 값**:
 * - `text` (string): 현재 입력된 할 일 텍스트
 * - `handleChange` (function): 입력 필드에서 값이 변경될 때 호출되는 함수
 * - `addTodo` (function): `Enter` 키 입력 시 새로운 할 일을 추가하는 함수
 * - `canAddTodo` (boolean): 할 일을 추가할 수 있는지 여부
 *
 * ---
 * 💡 **사용 예제**:
 * ```tsx
 * const { text, handleChange, addTodo, canAddTodo } = useTodoInput();
 *
 * <input type="text" value={text} onChange={handleChange} onKeyDown={(e) => e.key === 'Enter' && addTodo()} />
 * <p>{!canAddTodo && "할 일은 최대 10개까지만 추가할 수 있습니다."}</p>
 * ```
 */
export const useTodoInput = (maxLength: number = MAX_LENGTH) => {
  const [text, setText] = useState('');
  const todoList = useRecoilValue(todoListState); // ✅ 현재 할 일 목록 가져오기
  const setTodoList = useSetRecoilState(todoListState);

  // ✅ 미완료 할 일 개수 계산
  const undoneCount = todoList.filter((todo) => !todo.completed).length;
  const canAddTodo = undoneCount < MAX_UNDONE_TODOS;

  const addTodo = useCallback(() => {
    if (text.trim() === '') return;
    if (!canAddTodo) {
      alert('할 일은 최대 10개까지만 추가할 수 있습니다.'); // ✅ 경고 메시지 표시
      return;
    }

    const newTodos = [...todoList, { id: Date.now(), text, completed: false }];
    setTodoList(newTodos);
    setText('');

    updateServerTodos(newTodos);
  }, [text, setTodoList, canAddTodo]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= maxLength) {
      setText(e.target.value);
    }
  }, []);

  return {
    text,
    handleChange,
    addTodo,
    canAddTodo,
  };
};
