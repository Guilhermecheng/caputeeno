'use client';

import { GlobalContext } from '@/contexts/GlobalContext';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
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

const HoverMenu = styled(DropdownMenu.Trigger)`
    display: flex;
    align-items: center;
    background: none;

    border: none;
    outline: none;
    cursor: pointer;

    color: var(--color-gray-600);
    text-align: center;
    font-size: 14px;

    transition: transform 0.3s;

    span {
        margin-right: 8px;
    }

    &:hover {
        color: var(--color-gray-800);
    }

    &[data-state="open"] {
        svg {
            transform: rotate(180deg);
            transition: transform 0.3s;
        }
    }
`;

const DropdownContent = styled(DropdownMenu.Content)`
    background-color: white;
    padding: 12px 16px;
    border-radius: 4px;

    color: var(--color-gray-600);
    line-height: 22px;
    font-size: 14px;
    
    div {
        margin-bottom: 4px;
        cursor: pointer;

        &:last-child {
            margin-bottom: 0;
        }

        &:hover {
            outline: none;
            color: var(--color-gray-800);
        }
    }
`

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


                <DropdownMenu.Root>
                    <HoverMenu>
                        <span>Organizar por</span>
                        <FaChevronDown size={10} />
                    </HoverMenu>

                    <DropdownMenu.Portal>
                        <DropdownContent>
                            <DropdownMenu.Item>
                                Novidades
                            </DropdownMenu.Item>

                            <DropdownMenu.Item>
                                Preço: Maior - menor
                            </DropdownMenu.Item>

                            <DropdownMenu.Item>
                                Preço: Menor - maior
                            </DropdownMenu.Item>

                            <DropdownMenu.Item>
                                Mais vendidos
                            </DropdownMenu.Item>

                        </DropdownContent>
                    </DropdownMenu.Portal>
                </DropdownMenu.Root>

            </NavRow>
        </NavContainer>
    )
}