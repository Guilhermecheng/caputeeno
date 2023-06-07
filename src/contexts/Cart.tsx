import { createContext } from "react";

interface CartProductProps {
    id: string;
    name: string;
    description: string;
    price_in_cents: number;
    quantity: number;
}

export const CartContext = createContext<CartProductProps[]>([]);