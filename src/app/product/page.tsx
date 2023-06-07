'use client';

import { DefaultLayout } from "@/components/DefaultLayout";
import { ProductContent } from "@/components/ProductContent";
import { useRouter } from 'next/navigation'
import { styled } from "styled-components";
import { HiOutlineArrowCircleLeft } from "react-icons/hi"

const ProductSection = styled.section`
    margin-top: 24px;
`;

const BackButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-back-button);
    font-size: 14px;
    border: none;

    cursor: pointer;

    span {
        margin-left: 10px;
    }

    &:hover {
        color: var(--color-gray-800);
    }
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
                <BackButton onClick={() => router.back()}>
                    <HiOutlineArrowCircleLeft size={20} />
                    <span>Voltar</span>
                </BackButton>

                <ProductContent id={id} />
            </ProductSection>
        </DefaultLayout>
    )
}