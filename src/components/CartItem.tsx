'use client'

import { styled } from "styled-components"
import { BsTrash3 } from "react-icons/bs";

const CartItemLI = styled.li`
    display: flex;
    background-color: white;
    border-radius: 8px;
    position: relative;

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


export function CartItem() {
    return (
        <CartItemLI>
            <img src="/caneca-ceramica-rustica.png" alt="asd" />

            <div>
                <BsTrash3 size={20} />
                <h1>Caneca</h1>
                <p>desc</p>
            </div>


        </CartItemLI>
    )
}