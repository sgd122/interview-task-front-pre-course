'use client';
import type { MutableSnapshot } from 'recoil';
import { RecoilRoot } from 'recoil';

import { todoListState } from '@/states/todoState';

interface Props {
  children: React.ReactNode;
  initialTodos: { id: number; text: string; completed: boolean }[];
}

/** ✅ Hydration을 이용하여 Recoil 상태 초기화 */
const initializeState =
  (initialTodos: Props['initialTodos']) =>
  ({ set }: MutableSnapshot) => {
    set(todoListState, initialTodos);
  };

const LayoutRecoil = ({ children, initialTodos }: Props) => {
  return (
    <RecoilRoot initializeState={initializeState(initialTodos)}>
      {children}
    </RecoilRoot>
  );
};

export default LayoutRecoil;
