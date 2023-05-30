'use client';

import { Header } from "@/components/Header";
import { HomeMenu } from "@/components/HomeMenu";
import { ProductCatalogue } from "@/components/ProductCatalogue";
import client from "@/services/apolloClient";
import { ApolloProvider } from "@apollo/client";
import { styled } from "styled-components";

const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default function Home() {

  return (
    <ApolloProvider client={client}>
      <Main>
        <Header />
        
        <HomeMenu />

        <ProductCatalogue />
      </Main>
    </ApolloProvider>
  )
}
