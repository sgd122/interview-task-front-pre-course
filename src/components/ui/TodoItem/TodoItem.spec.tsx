import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import TodoItem from './index';

import { LayoutRecoil } from '@/components/layout';
import { useTodoItem } from '@/hooks/useTodoItem';
import { theme } from '@/styles/theme';
import type { Todo } from '@/types/todo';

// ✅ Mock 훅 (useTodoItem)
jest.mock('@/hooks/useTodoItem', () => ({
  useTodoItem: jest.fn(),
}));

// ✅ 초기 상태를 설정하는 함수 (항상 `RecoilRoot` 포함)
const customRender = (
  ui: React.ReactElement,
  { initialState = [] as Todo[] } = {}
) => {
  return render(<LayoutRecoil initialTodos={initialState}>{ui}</LayoutRecoil>);
};

jest.mock('@/hooks/useTodoItem', () => ({
  useTodoItem: jest.fn(),
}));

describe('📌 TodoItem 컴포넌트 테스트', () => {
  let mockToggleComplete: jest.Mock;
  let mockRemoveTodo: jest.Mock;

  beforeEach(() => {
    mockToggleComplete = jest.fn();
    mockRemoveTodo = jest.fn();

    // ✅ `useTodoItem`의 Mock 설정
    const useTodoItemMock = useTodoItem as jest.Mock;
    useTodoItemMock.mockReturnValue({
      toggleComplete: mockToggleComplete,
      removeTodo: mockRemoveTodo,
    });
  });

  test('📌 할 일 텍스트가 정상적으로 렌더링되는지 확인', () => {
    const todo: Todo = { id: 1, text: '코드 리팩토링 하기', completed: false };

    customRender(<TodoItem todo={todo} />);

    const todoText = screen.getByText('코드 리팩토링 하기');
    expect(todoText).toBeInTheDocument();
  });

  test('📌 완료 체크 버튼 클릭 시 `toggleComplete`가 호출되는지 확인', () => {
    const todo: Todo = { id: 1, text: '코드 리팩토링 하기', completed: false };

    customRender(<TodoItem todo={todo} />);

    const checkbox = screen.getByLabelText('check');

    fireEvent.click(checkbox);

    expect(mockToggleComplete).toHaveBeenCalledTimes(1);
  });

  test('📌 삭제 버튼 클릭 시 `removeTodo`가 호출되는지 확인', () => {
    const todo: Todo = { id: 1, text: '코드 리팩토링 하기', completed: false };

    customRender(<TodoItem todo={todo} />);

    const deleteButton = screen.getByRole('button', { name: /delete/i });
    fireEvent.click(deleteButton);

    expect(mockRemoveTodo).toHaveBeenCalledTimes(1);
  });

  test('📌 완료된 항목이면 텍스트에 `completed` 스타일이 적용되는지 확인', () => {
    const todo: Todo = { id: 1, text: '코드 리팩토링 하기', completed: true };

    customRender(<TodoItem todo={todo} />);

    const todoText = screen.getByText('코드 리팩토링 하기');
    expect(todoText).toHaveStyle(`color: ${theme.palette.textDone}`);
  });

  test('📌 미완료된 항목이면 텍스트에 `completed` 스타일이 적용되지 않는지 확인', () => {
    const todo: Todo = { id: 1, text: '코드 리팩토링 하기', completed: false };

    customRender(<TodoItem todo={todo} />);

    const todoText = screen.getByText('코드 리팩토링 하기');
    expect(todoText).not.toHaveStyle(`color: ${theme.palette.textDone}`);
  });
});
