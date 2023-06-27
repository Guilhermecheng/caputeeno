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

    orderBy: any;
    setOrderBy: any;
}


export const GlobalContext = createContext<GlobalContextProps>({
    cart: [],
    setCart: () => {},

    categoryValue: "all",
    setCategoryValue: () => {},

    orderBySelection: "publishedAt_DESC",
    setOrderBySelection: () => {},

    orderBy: {
        orderItem: "created_at",
        direction: "DESC",
    },
    setOrderBy:  () => {},
})

export const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartProductProps[]>([]);
    const [categoryValue, setCategoryValue] = useState<"all" | "mugs" | "t-shirts">("all");
    
    // order at Hygraph API
    const [orderBySelection, setOrderBySelection] = useState<"publishedAt_DESC" | "priceInCents_DESC" | "priceInCents_ASC" | "sales_DESC">("publishedAt_DESC");

    // order config for local fake API
    const [orderBy, setOrderBy] = useState({
        orderItem: "",
        direction: "ASC",
    })
    
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
            setOrderBySelection,

            orderBy,
            setOrderBy
         }}>
            { children }
        </GlobalContext.Provider>
    )
}
