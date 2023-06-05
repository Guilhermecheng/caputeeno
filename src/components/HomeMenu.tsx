'use client';

import { CategoryContext } from '@/contexts/Category';
import { useContext } from 'react';
import { FaChevronDown } from 'react-icons/fa'
import { styled } from 'styled-components';
import { Pagination } from './Pagination';

const NavContainer = styled.nav`
    width: 100%;
    padding: 0 16px;
    max-width: var(--max-width);
    margin: 34px 0;
`;

const NavRow = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    div {
        display: flex;
        align-items: center;
        color: var(--color-gray-600);
        gap: 16px;
    }
`;

const NavItems = styled.div`
    span {
        text-transform: uppercase;
        font-size: 16px;
        color: var(--color-gray-600);
        font-weight: 600;
        margin-right: 40px;
        cursor: pointer;

        &:hover {
            color: var(--color-gray-800);
        }
    }
`;

export function HomeMenu() {
    const { setCategoryValue } = useContext(CategoryContext);

    return (
        <NavContainer>
            <NavRow>
                <NavItems>
                    <span onClick={() => setCategoryValue("all")}>Todos os produtos</span>
                    <span onClick={() => setCategoryValue("t-shirts")}>Camisetas</span>
                    <span onClick={() => setCategoryValue("mugs")}>Canecas</span>
                </NavItems>

                <div>
                    Organizar por
                    <FaChevronDown size={10} />
                </div>
            </NavRow>

            <Pagination />
        </NavContainer>
    )
}