'use client';

import React from 'react';

import { Container, FilterButton, ListContainer, TodoFilter } from './styles';

import TodoInput from '@/components/ui/TodoInput';
import TodoList from '@/components/ui/TodoList';
import { useFilter } from '@/hooks/useFilter';
import type { FilterType } from '@/types/filter';

const FILTER_OPTIONS: { label: string; value: FilterType }[] = [
  { label: 'All', value: 'all' },
  { label: 'To Do', value: 'todo' },
  { label: 'Done', value: 'done' },
];

/**
 * 📌 `TodoUserList` 컴포넌트
 *
 * 할 일 입력 및 필터링 기능을 제공하는 UI 컨테이너입니다.
 *
 * ---
 * 📋 **Props**:
 * - `filter` (필수): 현재 선택된 필터 (`all`, `todo`, `done`)
 * - `setFilter` (필수): 필터 변경 함수
 *
 * ---
 * 📤 **Return 값**:
 * - 할 일 추가 및 필터 UI
 */
const TodoUserListPage = () => {
  const { filter, setFilter } = useFilter();

  return (
    <Container>
      <TodoInput />
      <ListContainer>
        <TodoFilter>
          {FILTER_OPTIONS.map(({ label, value }) => {
            return (
              <React.Fragment key={value}>
                {filter === value && (
                  <h2 key={`${value}-heading`} className="sr-only">
                    {value}
                  </h2>
                )}
                <FilterButton
                  key={`${value}-button`}
                  active={filter === value}
                  onClick={() => setFilter(value)}
                >
                  {label}
                </FilterButton>
              </React.Fragment>
            );
          })}
        </TodoFilter>
        <TodoList filter={filter} />
      </ListContainer>
    </Container>
  );
};

export default TodoUserListPage;
