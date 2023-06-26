'use client';

import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";

export interface CartProductProps {
    id: string;
    name: string;
    description: string;
    price_in_cents: number;
    quantity: number;
    image_url: string; 
}

interface GlobalContextProps {
    cart: CartProductProps[];
    setCart: Dispatch<SetStateAction<CartProductProps[]>>;
    
    categoryValue: "all" | "mugs" | "t-shirts";
    setCategoryValue: Dispatch<SetStateAction<"all" | "mugs" | "t-shirts">>;

    orderBySelection: "publishedAt_DESC" | "priceInCents_DESC" | "priceInCents_ASC" | "sales_DESC";
    setOrderBySelection: Dispatch<SetStateAction<"publishedAt_DESC" | "priceInCents_DESC" | "priceInCents_ASC" | "sales_DESC">>;
}


export const GlobalContext = createContext<GlobalContextProps>({
    cart: [],
    setCart: () => {},

    categoryValue: "all",
    setCategoryValue: () => {},

    orderBySelection: "publishedAt_DESC",
    setOrderBySelection: () => {},
})

export const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartProductProps[]>([]);
    const [categoryValue, setCategoryValue] = useState<"all" | "mugs" | "t-shirts">("all");
    const [orderBySelection, setOrderBySelection] = useState<"publishedAt_DESC" | "priceInCents_DESC" | "priceInCents_ASC" | "sales_DESC">("publishedAt_DESC");
    
    useEffect(() => {
        let local = localStorage.getItem("caputeeno-cart");
        if(local) {
            setCart(JSON.parse(local));
        }
    },[])

    return (
        <GlobalContext.Provider value={{ 
            cart,
            setCart,
            categoryValue,
            setCategoryValue,
            orderBySelection,
            setOrderBySelection
         }}>
            { children }
        </GlobalContext.Provider>
    )
}
