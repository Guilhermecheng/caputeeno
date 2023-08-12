'use client';

import { Dispatch, SetStateAction } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { styled } from 'styled-components';

const PageListDiv = styled.ul`
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    display: inline-flex;
    margin: 24px 0;
    padding: 0 16px;

    gap: 2px;

    li {
        list-style: none;
        background-color: var(--color-gray-500);

        color: var(--color-gray-600);
        font-size: 16px;
        padding: 8px 16px;
        border-radius: 8px;

        &:hover, &[data-page="active"]  {
            background-color: var(--color-gray-100);
            color: var(--color-orange-300);
            border: 1px solid var(--color-orange-300);
        }
    }
`;

const ArrowsDiv = styled.div`
    display: flex;
    margin-left: 6px;
    justify-content: flex-end;
    align-items: center;
    
    gap: 2px;

    li {
            list-style: none;
            background-color: var(--color-gray-500);

            color: var(--color-gray-600);
            font-size: 16px;
            padding: 8px 16px;
            border-radius: 8px;

            &:hover {
                background-color: var(--color-gray-100);
                color: var(--color-orange-300);
                border: 1px solid var(--color-orange-300);
            }

            &[data-state="deactive"] {
                opacity: 0.6;
                cursor: not-allowed;

                &:hover {
                    background-color: var(--color-gray-500);
                    color: var(--color-gray-600);
                    border: none;
                }

            }
        }
`;

interface PaginationProps {
    paginationProps: {
        page: number;
        setPage: Dispatch<SetStateAction<number>>;
        data: {
            products: {
                category: string;
                id: string;
                image_url: string;
                name: string;
                price_in_cents: number;
            }[];
        };
    }
}

export function Pagination({ paginationProps }: PaginationProps) {
    const { page, setPage, data } = paginationProps;
    // let paginationCount = Math.ceil(data.allProducts.length / 12);
    let paginationCount = Math.ceil(data.products.length / 12);
    let paginationArray = [];
    
    for(let i = 0; i < paginationCount; i++) {
        paginationArray.push(i + 1);
    }

    function leftArrowClick() {
        if(page > 1) {
            setPage(page - 1)
        }
    };

    function rightArrowClick() {
        if(page < paginationCount) {
            setPage(page + 1)
        }
    };

    return (
        <PageListDiv>
            { paginationArray.map((arrItem: number) => {
                return (
                    <li
                        key={arrItem}
                        onClick={() => setPage(arrItem)}
                        data-page={page === arrItem && "active"}
                    >
                        {arrItem}
                    </li>
                )
            }) }
            

            <ArrowsDiv>
                <li 
                    onClick={() => leftArrowClick()}
                    data-state={ page < 2 && "deactive" }
                >
                    <FaChevronLeft size={12} />
                </li>

                <li
                    onClick={() => rightArrowClick()}
                    data-state={ page === paginationCount && "deactive" }
                >
                    <FaChevronRight size={12} />
                </li>
            </ArrowsDiv>
        </PageListDiv>
    )
}