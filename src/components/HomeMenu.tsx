'use client';

import { GlobalContext } from '@/contexts/GlobalContext';
import { useContext } from 'react';
import { FaChevronDown } from 'react-icons/fa'
import { styled } from 'styled-components';

const NavContainer = styled.nav`
    width: 100%;
    padding: 0 16px;
    max-width: var(--max-width);
    margin-top: 34px;
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

        &[data-state="active"] {
            position: relative;
            color: var(--color-gray-800);

            &::after {
                content: '';
                position: absolute;
                bottom: -8px;
                left: 0;
                width: 100%;
                height: 4px;
                background-color: var(--color-orange-300)
            }
        }
    }
`;

export function HomeMenu() {
    const { categoryValue, setCategoryValue } = useContext(GlobalContext);

    return (
        <NavContainer>
            <NavRow>
                <NavItems>
                    <span 
                        onClick={() => setCategoryValue("all")}
                        data-state={ categoryValue === "all" && "active"}
                    >
                        Todos os produtos
                    </span>
                    <span 
                        onClick={() => setCategoryValue("t-shirts")}
                        data-state={ categoryValue === "t-shirts" && "active"}

                    >
                        Camisetas
                    </span>
                    <span 
                        onClick={() => setCategoryValue("mugs")}
                        data-state={ categoryValue === "mugs" && "active"}
                    >
                        Canecas
                    </span>
                </NavItems>

                <div>
                    Organizar por
                    <FaChevronDown size={10} />
                </div>
            </NavRow>
        </NavContainer>
    )
}