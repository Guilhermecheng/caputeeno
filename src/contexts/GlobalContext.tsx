'use client';

import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface CartProductProps {
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
}


export const GlobalContext = createContext<GlobalContextProps>({
    cart: [],
    setCart: () => {},

    categoryValue: "all",
    setCategoryValue: () => {}
})

export const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartProductProps[]>([]);
    const [categoryValue, setCategoryValue] = useState<"all" | "mugs" | "t-shirts">("all");
    

    return (
        <GlobalContext.Provider value={{ 
            cart,
            setCart,
            categoryValue,
            setCategoryValue
         }}>
            { children }
        </GlobalContext.Provider>
    )
}
