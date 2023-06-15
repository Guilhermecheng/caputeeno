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
    }

    div {
        padding: 16px 20px 16px 30px;
        position: relative;
    }
`;

const QtyAndPrice = styled.div`
    position: absolute;
    bottom: 0; 
    right: 0;
    padding: 0 !important;
    margin-top: 60px;
    display: flex;

    width: 100%;
    justify-content: space-between;

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
    const { id, name, description, price_in_cents, quantity, image_url } = cartProduct;
    let price_in_brazilian_reais = (price_in_cents / 100).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});


    return (
        <CartItemLI>
            <img src={ image_url } alt={name} />

            <div>
                <BsTrash3 size={20} />
                <h1>{name}</h1>
                <p>{description}</p>
            <QtyAndPrice>
                    <select name="" id="">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>

                    <span>
                        { price_in_brazilian_reais }
                    </span>
            </QtyAndPrice>
            </div>


        </CartItemLI>
    )
}