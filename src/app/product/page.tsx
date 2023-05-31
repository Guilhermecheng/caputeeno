'use client';

import { DefaultLayout } from "@/components/DefaultLayout";
import { styled } from "styled-components";

const ProductSection = styled.section`
    margin-top: 24px;
`;

const ProductContent = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 24px;

    @media(min-width:768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 32px;
    }
`
interface SearchParamsProps {
    searchParams: {
        id: string;
    }
}

export default function Product({ searchParams }: SearchParamsProps) {
    return (
        <DefaultLayout>
            <ProductSection>
                <span>Voltar</span>

                <ProductContent>
                    <div>
                        image
                    </div>
                    <div>
                        <h3>Caneca</h3>

                        <h1>Caneca linda</h1>

                        <span>*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</span>

                        <h2>Descrição</h2>

                    </div>
                </ProductContent>
            </ProductSection>
        </DefaultLayout>
    )
}