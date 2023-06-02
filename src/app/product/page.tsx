'use client';

import { DefaultLayout } from "@/components/DefaultLayout";
import { ProductContent } from "@/components/ProductContent";
import { styled } from "styled-components";

const ProductSection = styled.section`
    margin-top: 24px;
`;

interface SearchParamsProps {
    searchParams: {
        id: string;
    }
}

export default function Product({ searchParams }: SearchParamsProps) {
    const { id } = searchParams;

    return (
        <DefaultLayout>
            <ProductSection>
                <span>Voltar</span>

                <ProductContent id={id} />
            </ProductSection>
        </DefaultLayout>
    )
}