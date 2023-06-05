'use client';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { styled } from 'styled-components';

const PageListDiv = styled.ul`
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    display: inline-flex;
    margin-top: 24px;
    gap: 2px;

    li {
        list-style: none;
        background-color: var(--color-gray-500);

        color: var(--color-gray-600);
        font-size: 16px;
        padding: 8px 16px;
        border-radius: 8px;

        &:hover {
            background-color: var(--color-gray-100);
            color: var(--color-orange-300);
            border: 1px solid var(--color-orange-300);
        }
    }
`;

export function Pagination() {
    return (
        <PageListDiv>
            <li>1</li>
            <li>2</li>
            <li>3</li>

            <li style={{ marginLeft: 6 }}><FaChevronLeft size={12} /></li>
            <li><FaChevronRight size={12} /></li>
        </PageListDiv>
    )
}