'use client';

import { DefaultLayout } from "@/components/DefaultLayout";
import { ProductContent } from "@/components/ProductContent";
import { useRouter } from 'next/navigation'
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
    const router = useRouter();
    const { id } = searchParams;

    return (
        <DefaultLayout>
            <ProductSection>
                <button onClick={() => router.back()}>Voltar</button>

                <ProductContent id={id} />
            </ProductSection>
        </DefaultLayout>
    )
}