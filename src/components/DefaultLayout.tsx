'use client';

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

export function DefaultLayout({ children }: any) {
    const [CategoryValue, setCategoryValue] = useState<"all" | "mugs" | "t-shirts">("all");
    const value = { CategoryValue, setCategoryValue };

    return (
        <ApolloProvider client={client}>
            <CategoryContext.Provider value={ value }>
                <Main>
                    <Header />
                    <PageSection>{children}</PageSection>
                </Main>
            </CategoryContext.Provider>
        </ApolloProvider>
    )
}