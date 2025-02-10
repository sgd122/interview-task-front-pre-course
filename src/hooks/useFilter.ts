import { useState } from 'react';

import type { FilterType } from '@/types/filter';

/**
 * 📌 `useFilter` 커스텀 훅
 *
 * 할 일 필터링 상태를 관리하는 훅입니다.
 *
 * ---
 * 📤 **Return 값**:
 * - `filter` (현재 선택된 필터 상태)
 * - `setFilter` (필터 변경 함수)
 *
 * ---
 * 💡 **사용 예제**:
 * ```tsx
 * const { filter, setFilter } = useFilter();
 * ```
 */
export const useFilter = () => {
  const [filter, setFilter] = useState<FilterType>('all');

  return { filter, setFilter };
};
