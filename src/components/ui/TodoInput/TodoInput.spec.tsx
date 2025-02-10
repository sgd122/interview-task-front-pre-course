import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import TodoInput from './index';

import { LayoutRecoil } from '@/components/layout';
import type { Todo } from '@/types/todo';
import { updateServerTodos } from '@/utils/client/updateServerTodos';

/**
 * ✅ Recoil의 초기 상태를 설정하는 함수 (항상 `RecoilRoot` 포함)
 */
const customRender = (
  ui: React.ReactElement,
  { initialState = [] as Todo[] } = {}
) => {
  return render(<LayoutRecoil initialTodos={initialState}>{ui}</LayoutRecoil>);
};

jest.mock('@/utils/client/updateServerTodos', () => ({
  updateServerTodos: jest.fn(), // ✅ Jest의 Mock 함수로 대체
}));

describe('📌 TodoInput 컴포넌트 테스트', () => {
  beforeEach(() => {
    // NOTE: 서버와의 통신 제거
    (updateServerTodos as jest.Mock).mockImplementation(() =>
      Promise.resolve()
    );
  });

  test('📌 입력 필드가 정상적으로 렌더링되는지 확인', () => {
    customRender(<TodoInput placeholder="할 일을 입력하세요" />);

    const input = screen.getByPlaceholderText(
      '할 일을 입력하세요'
    ) as HTMLInputElement;

    expect(input).toBeInTheDocument();
  });

  test('📌 최대 길이(`maxLength`) 제한이 적용되는지 확인', () => {
    customRender(<TodoInput placeholder="할 일을 입력하세요" />);

    const input = screen.getByPlaceholderText(
      '할 일을 입력하세요'
    ) as HTMLInputElement;
    const longText = 'a'.repeat(50);

    fireEvent.change(input, { target: { value: longText } });

    expect(input.value).toBe('');
  });

  test('📌 공백만 입력했을 때 input 이 초기화가 되지 않는지 확인', () => {
    customRender(<TodoInput placeholder="할 일을 입력하세요" />);

    const input = screen.getByPlaceholderText(
      '할 일을 입력하세요'
    ) as HTMLInputElement;

    // ✅ 입력값을 공백으로 설정
    fireEvent.change(input, { target: { value: '   ' } });

    // ✅ `Enter` 키 입력
    fireEvent.keyDown(input, { key: 'Enter' });

    expect(input.value).toBe('   ');
  });

  test('📌 입력값과 같은지 확인', () => {
    customRender(<TodoInput placeholder="할 일을 입력하세요" />);

    const input = screen.getByPlaceholderText(
      '할 일을 입력하세요'
    ) as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'study react' } });

    expect(input.value).toBe('study react');
  });

  test('📌 입력값후 Enter 이벤트 동작시 빈 문자열인지 확인', () => {
    customRender(<TodoInput placeholder="할 일을 입력하세요" />);

    const input = screen.getByPlaceholderText(
      '할 일을 입력하세요'
    ) as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'study react' } });

    // ✅ `Enter` 키 입력
    fireEvent.keyDown(input, { key: 'Enter' });

    expect(input.value).toBe('');
  });
});
