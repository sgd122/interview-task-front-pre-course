import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import TodoListContainer from './index';

import { LayoutRecoil } from '@/components/layout';
import { useFilteredTodos } from '@/hooks/useFilteredTodos';
import type { Todo } from '@/types/todo';

// ✅ `useFilteredTodos`를 Mock 처리
jest.mock('@/hooks/useFilteredTodos', () => ({
  useFilteredTodos: jest.fn(),
}));

// ✅ 초기 상태를 설정하는 함수 (항상 `RecoilRoot` 포함)
const customRender = (
  ui: React.ReactElement,
  { initialState = [] as Todo[] } = {}
) => {
  return render(<LayoutRecoil initialTodos={initialState}>{ui}</LayoutRecoil>);
};

describe('📌 TodoList 컴포넌트 테스트', () => {
  let mockUseFilteredTodos: jest.Mock;

  beforeEach(() => {
    mockUseFilteredTodos = useFilteredTodos as jest.Mock;
  });

  test('📌 필터링된 할 일 목록이 정상적으로 렌더링되는지 확인', () => {
    // ✅ `useFilteredTodos`의 Mock 값 설정
    mockUseFilteredTodos.mockReturnValue({
      filteredTodos: [
        { id: 1, text: '할 일 1', completed: false },
        { id: 2, text: '할 일 2', completed: true },
      ],
      count: 2,
    });

    customRender(<TodoListContainer filter="all" />);

    // ✅ 할 일 목록이 정상적으로 표시되는지 확인
    expect(screen.getByText('할 일 1')).toBeInTheDocument();
    expect(screen.getByText('할 일 2')).toBeInTheDocument();
  });

  test('📌 할 일이 없을 경우 "목록이 존재하지 않습니다." 메시지가 표시되는지 확인', () => {
    // ✅ `filteredTodos`가 빈 배열인 경우 설정
    mockUseFilteredTodos.mockReturnValue({
      filteredTodos: [],
      count: 0,
    });

    customRender(<TodoListContainer filter="all" />);

    // ✅ "목록이 존재하지 않습니다."가 렌더링되는지 확인
    expect(screen.getByText('목록이 존재하지 않습니다.')).toBeInTheDocument();
  });

  test('📌 `count` 값이 올바르게 렌더링되는지 확인', () => {
    // ✅ `count`가 3인 경우 설정
    mockUseFilteredTodos.mockReturnValue({
      filteredTodos: [
        { id: 1, text: '할 일 1', completed: false },
        { id: 2, text: '할 일 2', completed: false },
        { id: 3, text: '할 일 3', completed: true },
      ],
      count: 3,
    });

    customRender(<TodoListContainer filter="all" />);

    // ✅ 총 개수 표시 확인
    expect(screen.getByText('총 3개')).toBeInTheDocument();
  });
});
