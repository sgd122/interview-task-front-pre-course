import styled from '@emotion/styled';

import { theme } from '@/styles/theme';

/** 📌 `Container` (메인 페이지 컨테이너) */
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`;

/** 📌 `TodoFilter` (필터 버튼 컨테이너) */
export const TodoFilter = styled.div`
    margin: 0 auto;
`;

/** 📌 `FilterButton` (필터 버튼 스타일) */
export const FilterButton = styled.button<{ active: boolean }>`
    width: 108px;
    height: 40px;
    padding: 8px 32px;
    border-radius: 12px;
    cursor: pointer;
    background: ${({ active }) => (active ? theme.palette.selectedBlue : 'transparent')};
    border: none;
    transition: background 0.2s ease-in-out;
    ${theme.typography['body2-bold']};
`;

/** 📌 `ListContainer` (할 일 목록 컨테이너) */
export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 100%;
    background: ${theme.palette.white};
    border-radius: 24px;
    padding: 32px;
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.12),
        0 0 6px rgba(0, 0, 0, 0.06);
`;
