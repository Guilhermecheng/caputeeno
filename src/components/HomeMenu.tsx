'use client';

import { FaChevronLeft, FaChevronRight, FaChevronDown } from 'react-icons/fa'
import { styled } from 'styled-components';

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


const PageList = styled.ul`
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

`


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

            <PageList>
                <li>1</li>
                <li>2</li>
                <li>3</li>

                <li style={{ marginLeft: 6 }}><FaChevronLeft size={12} /></li>
                <li><FaChevronRight size={12} /></li>
            </PageList>
        </NavContainer>
    )
}