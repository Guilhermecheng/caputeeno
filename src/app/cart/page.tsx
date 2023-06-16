'use client'

import { styled } from "styled-components";
import { useRouter } from "next/navigation";
import { useContext } from "react";

import { GlobalContext } from "@/contexts/GlobalContext";
import { CartItem } from "@/components/CartItem";
import { DefaultLayout } from "@/components/DefaultLayout";

import { HiOutlineArrowCircleLeft } from "react-icons/hi";

const CartSection = styled.section`
    margin-top: 24px;
    padding: 0 16px;
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
    display: flex;
    flex-direction: column;

    margin-top: 40px;

    @media (min-width:897px) {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 32px;
        margin-top: 0;

    }
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
    height: 700px;
    border-radius: 8px;

    position: relative;

    h1 {
        font-weight: 500;
        font-size: 24px;
        text-transform: uppercase;
        margin-bottom: 30px;
    }

    div {
        display: flex;
        flex-direction: column;

        span {
            display: flex;
            justify-content: space-between;
            margin-bottom: 12px;

            h3 {
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 150%;
            }

            span {
               margin: 0;
            }
        }
    }

    button {
        margin-top: 40px;
        width: 100%;
        background-color: #51B853;
        padding: 14px 0;
        color: white;
        border: none;
        font-weight: 500;
        font-size: 16px;
        text-transform: uppercase;
        cursor: pointer;
        border-radius: 4px;

        &:hover {
            background-color: #66d068;
        }
    }

    ul {
        position: absolute;
        bottom: 24px;

        li {
            list-style: none;
            text-transform: uppercase;
        }
    }
`;

const TotalPrice = styled.span`
    margin-top: 12px;
    padding-top: 8px;
    border-top: 1px solid #DCE2E6;
    
    h2 {
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 150%;
    }

    span {
        margin: 0;
        font-weight: 600;
        font-size: 16px;
        border-top: none;
    }
`;

export default function Cart() {
    const router = useRouter();
    const { cart, setCart } = useContext(GlobalContext);
    console.log(cart)


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
                                { cart.length > 0 ? (
                                    cart.map((item) => <CartItem cartProduct={item} /> ) 
                                ) : (
                                    <>
                                        <h1>Carrinho vazio</h1>
                                    </>
                                )}
                                
                            </ul>
                        </LeftSection>


                        <RightSection>
                            <h1>Resumo do pedido</h1>

                            <div>
                                <span>
                                    <h3>Subtotal dos produtos</h3>
                                    <span>R$40,00</span>
                                </span>

                                <span>
                                    <h3>Entrega</h3>
                                    <span>R$40,00</span>
                                </span>

                                <TotalPrice>
                                    <h2>Total</h2>
                                    <span>R$40,00</span>
                                </TotalPrice>
                            </div>

                            <button>FINALIZAR COMPRA</button>

                            <ul>
                                <li>Ajuda</li>
                                <li>Reembolsos</li>
                                <li>Entrega e frete</li>
                                <li>Trocas e devoluções</li>
                            </ul>

                        </RightSection>
                    </CartContent>
                </CartSection>
        </DefaultLayout>
    )
}