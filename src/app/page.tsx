'use client';

import { Header } from "@/components/Header";
import { styled } from "styled-components";

const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default function Home() {
  return (
    <Main>
      <Header />
      <h1>Hello world</h1>
    </Main>
  )
}
