import { styled } from "styled-components";
import { FaChevronDown } from 'react-icons/fa'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useContext } from "react";
import { GlobalContext } from "@/contexts/GlobalContext";

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

export function OrderByDropdown() {
    const { setOrderBySelection } = useContext(GlobalContext);

    return (
        <DropdownMenu.Root>
            <HoverMenu>
                <span>Organizar por</span>
                <FaChevronDown size={10} />
            </HoverMenu>

            <DropdownMenu.Portal>
                <DropdownContent>
                    <DropdownMenu.Item onClick={() => setOrderBySelection("publishedAt_DESC")}>
                        Novidades
                    </DropdownMenu.Item>

                    <DropdownMenu.Item onClick={() => setOrderBySelection("priceInCents_DESC")}>
                        Preço: Maior - menor
                    </DropdownMenu.Item>

                    <DropdownMenu.Item onClick={() => setOrderBySelection("priceInCents_ASC")}>
                        Preço: Menor - maior
                    </DropdownMenu.Item>

                    <DropdownMenu.Item onClick={() => setOrderBySelection("sales_DESC")}>
                        Mais vendidos
                    </DropdownMenu.Item>

                </DropdownContent>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    )
}