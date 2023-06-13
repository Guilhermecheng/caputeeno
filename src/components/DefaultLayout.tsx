'use client';

import { CartContext } from "@/contexts/Cart";
import { CategoryContext } from "@/contexts/Category";
import client from "@/services/apolloClient";
import { ApolloProvider } from "@apollo/client";
import { ReactNode, useState } from "react";
import { styled } from "styled-components"
import { Header } from "./Header";

const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const PageSection = styled.section`
    width: 100%;
    align-items: center;
    padding: 0 16px;


    @media(min-width: 768px) {
        max-width: var(--max-width);
        padding: 0;
    }
`;

interface CartProductProps {
    id: string;
    name: string;
    description: string;
    price_in_cents: number;
    quantity: number;
}

export function DefaultLayout({ children }: { children: ReactNode }) {
    const [CategoryValue, setCategoryValue] = useState<"all" | "mugs" | "t-shirts">("all");
    const categoryValue = { CategoryValue, setCategoryValue };

    const [cart, setCart] = useState<CartProductProps[]>([]);


    return (
        <ApolloProvider client={client}>
            <CartContext.Provider value={{ cart, setCart }}>
                <CategoryContext.Provider value={ categoryValue }>
                        <Main>
                            <Header />
                            <PageSection>{children}</PageSection>
                        </Main>
                </CategoryContext.Provider>
            </CartContext.Provider>
        </ApolloProvider>
    )
}