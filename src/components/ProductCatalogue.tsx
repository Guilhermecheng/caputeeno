'use client';

import { GlobalContext } from '@/contexts/GlobalContext';
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

interface ProductCatalogueProps {
    category?: string;
}

export function ProductCatalogue({ category }: ProductCatalogueProps) {
    const { categoryValue, orderBy, orderBySelection, searchQuery } = useContext(GlobalContext);
    
    const { data } = useGetProductsList(searchQuery, categoryValue, orderBySelection);

    const [page, setPage] = useState(1);
    const paginationProps = { page, setPage, data };
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
        console.log(data)

        if(data) {
            console.log(data.products)

            // setDisplayedProducts(data.allProducts.slice(0,12));
            setDisplayedProducts(data.products.slice(0,12));
            setPage(1);
        }
    },[data])

    useEffect(() => {
        if(data) {
            // setDisplayedProducts(data.allProducts.slice(arrayLowerNumber(page),arrayUpperNumber(page)));
            setDisplayedProducts(data.products.slice(arrayLowerNumber(page),arrayUpperNumber(page)));
        }
    },[page])

    if(!data) return <Loading />;

    return (
        <CatalogueSection>
            <Pagination paginationProps={paginationProps} />

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
            <Pagination paginationProps={paginationProps} />
        </CatalogueSection>
    )
}