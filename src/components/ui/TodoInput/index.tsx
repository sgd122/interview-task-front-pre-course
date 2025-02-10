'use client';
import { Input, InputContainer } from './styles';

import { useTodoInput } from '@/hooks/useTodoInput';

interface Props {
  placeholder?: string;
}

/**
 * 📌 `TodoInput` 컴포넌트
 *
 * 사용자가 할 일을 입력할 수 있는 입력 필드입니다.
 * - `useTodoInput` 훅을 사용하여 상태를 관리합니다.
 * - `Enter` 키 입력 시 새로운 할 일을 추가합니다.
 *
 * ---
 * 📋 **Props**:
 * - `placeholder` (선택): 입력 필드에 표시될 플레이스홀더 (기본값: `'할 일을 입력해 주세요'`).
 *
 * ---
 * 📤 **Return 값**:
 * - `Input` (`input`): 할 일을 입력할 수 있는 텍스트 입력 필드
 *
 * ---
 * 💡 **사용 예제**:
 * ```tsx
 * <TodoInput placeholder="할 일을 입력하세요" />
 * ```
 */
const TodoInput: React.FC<Props> = ({
  placeholder = '할 일을 입력해 주세요',
}) => {
  const { text, handleChange, addTodo } = useTodoInput();

  return (
    <InputContainer>
      <Input
        type="text"
        placeholder={placeholder}
        value={text}
        onChange={handleChange}
        onKeyDown={(e) => {
          if (e.nativeEvent.isComposing) return; // ✅ 한글 조합 중이면 Enter 무시
          if (e.key === 'Enter') addTodo();
        }}
      />
    </InputContainer>
  );
};

export default TodoInput;
