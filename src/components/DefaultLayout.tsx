'use client';

import client from "@/services/apolloClient";
import { ApolloProvider } from "@apollo/client";
import { ReactNode } from "react";
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
    padding: 0 16px;

    @media(min-width: 768px) {
        max-width: var(--max-width);
        padding: 0;
    }
`;

export function DefaultLayout({ children }: any) {
    return (
        <ApolloProvider client={client}>
            <Main>
                <Header />
                <PageSection>{children}</PageSection>
            </Main>
        </ApolloProvider>
    )
}