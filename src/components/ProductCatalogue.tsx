'use client';

import { CategoryContext } from '@/contexts/Category';
import { useGetProductsList } from '@/hooks/useGetProductsList';
import { useContext, useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { CatalogueCard, ProductProps } from './CatalogueCard';
import { Loading } from './Loading';
import { Pagination } from './Pagination';

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
    const { CategoryValue } = useContext(CategoryContext);
    
    const { data } = useGetProductsList(CategoryValue);

    const [page, setPage] = useState(1);
    const pageForPagination = { page, setPage };;
    const [displayedProducts, setDisplayedProducts] = useState([]);

    function arrayLowerNumber(page: number) {
        if(page === 1) {
            return 0;
        } else if (page > 1){
            return 12 * (page - 1);
        }
    }

    function arrayUpperNumber(page: number) {
        return 12 * page;
    }

    useEffect(() => {
        if(data) {
            setDisplayedProducts(data.allProducts.slice(arrayLowerNumber(page),arrayUpperNumber(page)));
        }
    },[data, page])

    if(!data) return <Loading />;

    return (
        <CatalogueSection>
            <Pagination pageForPagination={pageForPagination} />

            <CatalogueGrid>
                { displayedProducts.map((product: ProductProps) => {
                    return (
                        <CatalogueCardDiv key={product.id}>
                            <CatalogueCard 
                                {...product}
                            />
                        </CatalogueCardDiv>
                    )
                }) }
                
            </CatalogueGrid>
            <Pagination pageForPagination={pageForPagination} />
        </CatalogueSection>
    )
}