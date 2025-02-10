import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import { LayoutRecoil } from '@/components/layout';
import TodoUserListPage from '@/components/pages/TodoUserListPage/index';
import { useFilter } from '@/hooks/useFilter';
import type { Todo } from '@/types/todo';

/**
 * ✅ Recoil의 초기 상태를 설정하는 함수 (항상 `RecoilRoot` 포함)
 */
const customRender = (
  ui: React.ReactElement,
  { initialState = [] as Todo[] } = {}
) => {
  return render(<LayoutRecoil initialTodos={initialState}>{ui}</LayoutRecoil>);
};

// ✅ `useFilter` 및 `useSearchParams` Mock 처리
jest.mock('@/hooks/useFilter', () => ({
  useFilter: jest.fn(),
}));

describe('TodoUserListPage', () => {
  let mockSetFilter: jest.Mock;
  let rerenderComponent: (ui: React.ReactElement) => void;
  const initialState = [
    { id: 1, text: '할 일 1(미완료)', completed: false },
    { id: 2, text: '할 일 2(완료)', completed: true },
    { id: 3, text: '할 일 3(완료)', completed: true },
  ];

  beforeEach(() => {
    // ✅ Mock 함수 생성하여 `useFilter`의 반환 값을 설정
    mockSetFilter = jest.fn();
    (useFilter as jest.Mock).mockReturnValue({
      filter: 'all',
      setFilter: mockSetFilter,
    });

    // ✅ `customRender` 실행 후 `rerender` 함수 가져오기
    const { rerender } = customRender(<TodoUserListPage />, {
      initialState,
    });

    rerenderComponent = rerender;
  });

  test('📌 필터 버튼들이 정상적으로 렌더링되는지 확인', () => {
    expect(screen.getByText('All')).toBeInTheDocument();
    expect(screen.getByText('To Do')).toBeInTheDocument();
    expect(screen.getByText('Done')).toBeInTheDocument();
  });

  test('📌 필터 버튼 클릭 시 `setFilter`가 호출되는지 확인', () => {
    const todoButton = screen.getByText('To Do');
    fireEvent.click(todoButton);

    expect(mockSetFilter).toHaveBeenCalledWith('todo');
  });

  test('📌 선택된 필터 값이 `h2`에 올바르게 반영되는지 확인', () => {
    (useFilter as jest.Mock).mockReturnValue({
      filter: 'done',
      setFilter: mockSetFilter,
    });

    // ✅ `rerenderComponent` 사용하여 `RecoilRoot` 유지한 채 재렌더링
    rerenderComponent(
      <LayoutRecoil initialTodos={initialState}>
        <TodoUserListPage />
      </LayoutRecoil>
    );

    // ✅ `h2` 태그를 가져와서 필터 값이 올바르게 반영되었는지 확인
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent('done');
  });

  test('📌 `TodoInput`이 정상적으로 렌더링되는지 확인', () => {
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('📌 `TodoList` 컴포넌트가 필터에 따라 렌더링되는지 확인', () => {
    expect(screen.getByTestId('todo-list')).toBeInTheDocument();
  });

  test('📌 필터 적용 후 올바른 개수의 할 일이 렌더링되는지 확인', () => {
    (useFilter as jest.Mock).mockReturnValue({
      filter: 'todo', // ✅ 미완료 항목만 렌더링해야 함
      setFilter: mockSetFilter,
    });

    // ✅ `rerenderComponent` 사용하여 `RecoilRoot` 유지한 채 재렌더링
    rerenderComponent(
      <LayoutRecoil initialTodos={initialState}>
        <TodoUserListPage />
      </LayoutRecoil>
    );

    // ✅ 미완료 항목만 렌더링되어야 함
    const listItems = screen.getAllByRole('list-item');
    listItems.forEach((item) => {
      expect(item).not.toHaveTextContent('할 일 2(완료)');
    });

    expect(listItems).toHaveLength(1);
  });
});
