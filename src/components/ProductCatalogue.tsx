'use client';

import { GET_ALL_PRODUCTS } from '@/services/queries';
import { useQuery } from '@apollo/client';
import Image from 'next/image';
import { styled } from 'styled-components';
import { Loading } from './Loading';
import { PageList } from './PageList';

const CatalogueSection = styled.section`
    margin-bottom: 60px;
`;

const CatalogueGrid = styled.div`
    width: 100%;

    display: grid;
    grid-template-columns: repeat(2, 1fr);

    margin-bottom: 50px;

    gap: 32px;

    @media(min-width: 768px) {
        grid-template-columns: repeat(4, 1fr);
    }
`;

const CatalogueItem = styled.div`
    background-color: white;
    border-radius: 8px;


    div {
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

export interface ProductProps {
    category: string; 
    id: string; 
    image_url: string; 
    name: string; 
    price_in_cents: number; 
}

export function ProductCatalogue() {
    const { data, refetch } = useQuery(GET_ALL_PRODUCTS);
    console.log(data)

    if(!data) return <Loading />;

    return (
        <CatalogueSection>
            <CatalogueGrid>
                { data.allProducts.slice(0, 12).map((product: ProductProps) => {
                    return (
                        <CatalogueItem key={product.id}>
                            <Image 
                                // src={product.image_url} 
                                src={`/caneca-ceramica-rustica.png`}
                                width={256}
                                height={300}
                                alt='image'
                                style={{ borderRadius: '8px 8px 0 0' }}
                            />
                            <div>
                                <h2>{product.name}</h2>
                                <span>{product.price_in_cents}</span>
                            </div>
                        </CatalogueItem>
                    )
                }) }
                
            </CatalogueGrid>
            <PageList />
        </CatalogueSection>
    )
}