'use client';

import Image from 'next/image';
import { styled } from 'styled-components';

const CatalogueSection = styled.section`
    width: 100%;
    max-width: var(--max-width);
    padding: 0 16px;

    display: flex;
    /* justify-content: center; */
    flex-wrap: wrap;
    gap: 32px;

    
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
        }

        span {
            font-size: 14px;
            color: var(--color-almost-black);
            font-weight: 600;
        }
    }
`;

export function ProductCatalogue() {
    return (
        <CatalogueSection>
            <CatalogueItem>
                <Image 
                    src={`/caneca-ceramica-rustica.png`} 
                    width={256}
                    height={300}
                    alt='image'
                />
                <div>
                    <h2>Caneca de cerâmica rústica</h2>
                    <span>R$10,00</span>
                </div>
            </CatalogueItem>

            <CatalogueItem>
                <span>image</span>
                <div>
                    <h2>Caneca de cerâmica rústica</h2>
                    <span>R$10,00</span>
                </div>
            </CatalogueItem>

            <CatalogueItem>
                <span>image</span>
                <div>
                    <h2>Caneca de cerâmica rústica</h2>
                    <span>R$10,00</span>
                </div>
            </CatalogueItem>

            <CatalogueItem>
                <span>image</span>
                <div>
                    <h2>Caneca de cerâmica rústica</h2>
                    <span>R$10,00</span>
                </div>
            </CatalogueItem>

            <CatalogueItem>
                <span>image</span>
                <div>
                    <h2>Caneca de cerâmica rústica</h2>
                    <span>R$10,00</span>
                </div>
            </CatalogueItem>

        </CatalogueSection>
    )
}