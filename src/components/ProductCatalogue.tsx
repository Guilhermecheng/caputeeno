'use client';

import { GET_ALL_PRODUCTS } from '@/services/queries';
import { useQuery } from '@apollo/client';
import { styled } from 'styled-components';
import { CatalogueCard, ProductProps } from './CatalogueCard';
import { Loading } from './Loading';
import { PageList } from './PageList';

const CatalogueSection = styled.section`
    margin-bottom: 60px;
`;

const CatalogueGrid = styled.div`
    width: 100%;

    display: grid;
    grid-template-columns: 1fr;

    margin-bottom: 50px;

    gap: 32px;

    @media(min-width: 580px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media(min-width: 856px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media(min-width: 1152px) {
        grid-template-columns: repeat(4, 1fr);
    }
`;

const CatalogueCardDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export function ProductCatalogue() {
    const { data, refetch } = useQuery(GET_ALL_PRODUCTS);
    console.log(data)

    if(!data) return <Loading />;

    return (
        <CatalogueSection>
            <CatalogueGrid>
                { data.allProducts.slice(0, 12).map((product: ProductProps) => {
                    return (
                        <CatalogueCardDiv key={product.id}>
                            <CatalogueCard 
                                {...product}
                            />
                        </CatalogueCardDiv>
                    )
                }) }
                
            </CatalogueGrid>
            <PageList />
        </CatalogueSection>
    )
}