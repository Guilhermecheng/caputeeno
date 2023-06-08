'use client'

import { CartItem } from "@/components/CartItem";
import { DefaultLayout } from "@/components/DefaultLayout";
import { useRouter } from "next/navigation";
import { HiOutlineArrowCircleLeft } from "react-icons/hi";
import { styled } from "styled-components";

const CartSection = styled.section`
    margin-top: 24px;
`;

const BackButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-back-button);
    font-size: 14px;
    border: none;

    cursor: pointer;

    span {
        margin-left: 10px;
    }

    &:hover {
        color: var(--color-gray-800);
    }
`;

const CartContent = styled.div`
    width:100%;
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 32px;
`;

const LeftSection = styled.div`
    margin-top: 24px;
    color: var(--color-gray-800);

    h1 {
        font-weight: 500;
        font-size: 24px;
        text-transform: uppercase;
    }

    h2 {
        font-weight: 300;
        font-size: 16px;
    }

    ul {
        margin-top: 24px;
    }
`;

const RightSection = styled.div`
    width: 100%;
    color: var(--color-gray-800);
    background-color: white;
    padding: 16px 24px;

    h1 {
        font-weight: 500;
        font-size: 24px;
        text-transform: uppercase;
    }
`;

export default function Cart() {
    const router = useRouter();

    return (
        <DefaultLayout>
                <CartSection>
                    <BackButton onClick={() => router.back()}>
                        <HiOutlineArrowCircleLeft size={20} />
                        <span>Voltar</span>
                    </BackButton>

                    <CartContent>
                        <LeftSection>
                            <h1>Seu carrinho</h1>
                            <h2>Total</h2>

                            <ul>
                                <CartItem />
                            </ul>
                        </LeftSection>


                        <RightSection>
                            <h1>Resumo do pedido</h1>

                        </RightSection>
                    </CartContent>
                </CartSection>
        </DefaultLayout>
    )
}