'use client';

import { FaChevronDown } from 'react-icons/fa'
import { styled } from 'styled-components';
import { PageList } from './PageList';

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
    return (
        <NavContainer>
            <NavRow>
                <NavItems>
                    <span>Todos os produtos</span>
                    <span>Camisetas</span>
                    <span>Canecas</span>
                </NavItems>

                <div>
                    Organizar por
                    <FaChevronDown size={10} />
                </div>
            </NavRow>

            <PageList />
        </NavContainer>
    )
}