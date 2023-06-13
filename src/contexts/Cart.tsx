'use client';

import { createContext, Dispatch, SetStateAction } from "react";

interface CartProductProps {
    id: string;
    name: string;
    description: string;
    price_in_cents: number;
    quantity: number;
}

interface CartContextProps {
    cart: CartProductProps[];
    setCart: Dispatch<SetStateAction<CartProductProps[]>>
}

export const CartContext = createContext<CartContextProps>({
    cart: [],
    setCart: () => {}
});