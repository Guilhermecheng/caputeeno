'use client'

import { styled } from "styled-components"
import { BsTrash3 } from "react-icons/bs";

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
        margin-right: 30px;
    }

    div {
        padding: 16px 0;
    }
`;

interface CartItemProps {
    cartProduct: {
        id: string;
        name: string;
        description: string;
        price_in_cents: number;
        quantity: number;
    }
}


export function CartItem({ cartProduct }: CartItemProps) {
    const { id, name, description, price_in_cents, quantity } = cartProduct;

    return (
        <CartItemLI>
            <img src="/caneca-ceramica-rustica.png" alt="asd" />

            <div>
                <BsTrash3 size={20} />
                <h1>{name}</h1>
                <p>{description}</p>
            </div>
        </CartItemLI>
    )
}