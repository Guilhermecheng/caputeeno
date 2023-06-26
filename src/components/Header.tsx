'use client';

import { styled } from 'styled-components';
import { BiSearchAlt2 } from 'react-icons/bi';
import { RiShoppingBag3Line } from 'react-icons/ri';
import { Saira_Stencil_One } from 'next/font/google';
import Link from 'next/link';
import { useContext } from 'react';
import { GlobalContext } from '@/contexts/GlobalContext';

const sairaStencil = Saira_Stencil_One({ 
    weight: ['400'],
    subsets: ['latin'] 
})

const HeaderBody = styled.header`
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: center;
`;

const HeaderContent = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--max-width);
    padding: 0 16px;
`;

const PageTitle = styled(Link)`
    font-family: ${sairaStencil.style.fontFamily};
    font-size: 40px;
    color: var(--color-gray-700);
    cursor: pointer;
    text-decoration: none;
`;

const SearchAndCart = styled.div`
    display: flex;
    align-items: center;
    color: var(--color-gray-700);
`;

const Input = styled.input`
    background-color: var(--color-gray-200);
    border: none;
    font-size: 14px;
    padding: 16px 10px;
    width: 352px;
    position: relative;
    border-radius: 8px;
    color: var(--color-gray-700);
`;

const SearchIcon = styled.span`
    position: absolute;
    right: 12px;
    top: 12px;
    cursor: pointer;
`;

const CartLink = styled(Link)`
    position: relative;
    
    svg {
        text-decoration: none !important;
        color: var(--color-gray-800);

        &:hover, &:link, &:active, &:visited {
            text-decoration: none !important;
            color: var(--color-gray-800);
        }
    }

    span {
        position: absolute;
        bottom: 0;
        right: -2px;
        font-size: 10px;
        color: white;
        background-color: red;
        padding: 0 4px;
        border-radius: 24px;
    }
`;

export function Header() {
    const { cart } = useContext(GlobalContext);
    let cartLength = cart.length;

    return (
        <HeaderBody>
            <HeaderContent>
                    <PageTitle href={'/'}>caputeeno</PageTitle>

                <SearchAndCart>
                    <div style={{ position: 'relative' }}>
                        <Input type="text" placeholder='Procura por algo específico?' />
                        <SearchIcon>
                            <BiSearchAlt2 size={24} />
                        </SearchIcon>
                    </div>

                    <CartLink href={`/cart`}>
                        <RiShoppingBag3Line size={24} style={{ marginLeft: 24, cursor: 'pointer' }} />
                        { cartLength > 0 && <span>{cartLength}</span> }
                    </CartLink>
                </SearchAndCart>
            </HeaderContent>
        </HeaderBody>
    )
}