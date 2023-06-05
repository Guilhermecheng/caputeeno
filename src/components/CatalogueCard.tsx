'use client';

import Link from "next/link";
import { styled } from "styled-components";

const CatalogueItem = styled(Link)`
    width: 256px;
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: white;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    text-decoration: none; 

    div {
        width: 100%;
        padding: 8px 12px;

        h2 {
            font-size: 16px;
            color: var(--color-gray-800);
            font-weight: 400;
            position: relative;
            margin-bottom: 16px;
        }

        h2::after {
            content: '';
            position: absolute;
            bottom: -8px;
            left: 0;
            width: 100%;
            height: 1px;
            background-color: var(--color-gray-550);

        }

        span {
            font-size: 14px;
            color: var(--color-almost-black);
            font-weight: 600;
        }
    }
`;

const Img = styled.img`
    height: 256px;
    width: 300px;
    border-radius: '8px 8px 0 0';
    object-fit: cover;
    object-position: 100% 100%;
`

export interface ProductProps {
    category: string; 
    id: string; 
    image_url: string; 
    name: string; 
    price_in_cents: number; 
}

export function CatalogueCard({ category, id, image_url, name, price_in_cents }: ProductProps) {
    let price_in_brazilian_reais = (price_in_cents / 100).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    return (
        <CatalogueItem href={{ pathname: 'product', query: { id: id } }}>
            <Img 
                src={image_url}
                alt={name}
                width={256}
                height={300}
            />
            <div>
                <h2>{name}</h2>
                <span>{price_in_brazilian_reais}</span>
            </div>
        </CatalogueItem>
    )
}