'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useState } from 'react';

import type { FilterType } from '@/types/filter';

/**
 * 📌 `useFilter` 커스텀 훅
 *
 * - URL Query String을 기반으로 필터 값을 설정하고 유지합니다.
 * - 사용자가 필터를 변경하면 URL이 업데이트됩니다.
 */
export const useFilter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  // ✅ URL에서 `filter` 값 가져오기 (기본값: 'all')
  const defaultFilter = (searchParams.get('filter') as FilterType) ?? 'all';
  const [filter, setFilterState] = useState<FilterType>(defaultFilter);

  // ✅ 필터 변경 시 URL Query String 업데이트 (`URLSearchParams` 활용)
  const setFilter = useCallback(
    (newFilter: FilterType) => {
      setFilterState(newFilter);

      const currentParams = new URLSearchParams(searchParams);
      currentParams.set('filter', newFilter);

      router.push(`?${currentParams.toString()}`, { scroll: false });
    },
    [router, searchParams]
  );

  return { filter, setFilter };
};
