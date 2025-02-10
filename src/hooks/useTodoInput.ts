import { useCallback, useState } from 'react';
import { useSetRecoilState } from 'recoil';

import { todoListState } from '@/states/todoState';

const MAX_LENGTH = 20;

/**
 * 📌 `useTodoInput` 커스텀 훅
 *
 * 할 일 입력을 관리하는 커스텀 훅입니다.
 * - 입력된 텍스트 상태를 관리하고,
 * - 최대 글자 수 제한(`maxLength`)을 적용하며,
 * - `Enter` 키 입력 시 새로운 할 일을 추가하는 기능을 제공합니다.
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
 *
 * ---
 * 💡 **사용 예제**:
 * ```tsx
 * const { text, handleChange, addTodo } = useTodoInput();
 *
 * <input type="text" value={text} onChange={handleChange} onKeyDown={(e) => e.key === 'Enter' && addTodo()} />
 * ```
 */
export const useTodoInput = (maxLength: number = MAX_LENGTH) => {
  const [text, setText] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const addTodo = useCallback(() => {
    if (text.trim() === '') return;
    setTodoList((prev) => [
      ...prev,
      { id: Date.now(), text, completed: false },
    ]);
    setText('');
  }, [text, setTodoList]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= maxLength) {
      setText(e.target.value);
    }
  }, []);

  return {
    text,
    handleChange,
    addTodo,
  };
};
