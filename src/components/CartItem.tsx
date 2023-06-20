'use client'

import { styled } from "styled-components"
import { BsTrash3 } from "react-icons/bs";
import { useContext, useEffect } from "react";
import { GlobalContext } from "@/contexts/GlobalContext";

const CartItemLI = styled.li`
    display: flex;
    background-color: white;
    border-radius: 8px;
    position: relative;
    margin-bottom: 10px;

    svg {
        position: absolute;
        right: 24px;
        color: red;
        cursor: pointer;
    }

    img {
        height: 211px;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
    }

    div {
        padding: 16px 20px 16px 30px;
        position: relative;

        h1 {
            font-size: 20px;
            font-style: normal;
            font-weight: 300;
            text-transform: none;
            line-height: 150%;
            letter-spacing: 1px;
            margin-bottom: 12px;
        }

        p {
            height: 72px;
            overflow: hidden;
            font-weight: 400;
            font-size: 12px;
            line-height: 150%;
        }
    }
`;

const QtyAndPrice = styled.div`
    position: absolute;
    bottom: 0; 
    right: 0;
    padding: 0 !important;
    margin-top: 30px;
    display: flex;

    width: 100%;
    justify-content: space-between;

    select {
        background-color: #F3F5F6;
        border: 1px solid #A8A8B3;
        color: #737380;
        border-radius: 8px;
        padding: 8px 12px;
    }

    span {
        font-weight: bold;
    }
`;

interface CartItemProps {
    cartProduct: {
        id: string;
        name: string;
        description: string;
        price_in_cents: number;
        quantity: number;
        image_url: string;
    }
}


export function CartItem({ cartProduct }: CartItemProps) {
    const { cart, setCart } = useContext(GlobalContext);
    const valuesArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


    const { id, name, description, price_in_cents, quantity, image_url } = cartProduct;
    let price_in_brazilian_reais = ((price_in_cents * quantity) / 100).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    function removeItemFromCart(itemId: string) {
        let  cartItem = cart.findIndex(o => o.id === itemId);
        cart.splice(cartItem, 1);
        console.log(cart);
        setCart([...cart]);

        localStorage.setItem("caputeeno-cart", JSON.stringify(cart));
    }

    function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
        e.preventDefault();
        const value = e.target.value;
        let  cartItem = cart.findIndex(o => o.id === id);
        cart[cartItem].quantity = parseInt(value);
        console.log(cart)
        setCart([...cart]);

        localStorage.setItem("caputeeno-cart", JSON.stringify(cart));
    }

    return (
        <CartItemLI>
            <img src={ image_url } alt={name} />

            <div>
                <BsTrash3 size={20} onClick={() => {removeItemFromCart(id)}} />
                <h1>{name}</h1>
                <p>{description}</p>

                <QtyAndPrice>
                        <select name={`${name} quantity`} id={`${id}-quantity`} value={quantity} onChange={handleChange}>
                            { valuesArr.map((val) => {
                                return (
                                    <option key={val} value={val}>{val}</option>
                                )
                            })}
                        </select>

                        <span>
                            { price_in_brazilian_reais }
                        </span>
                </QtyAndPrice>
            </div>


        </CartItemLI>
    )
}