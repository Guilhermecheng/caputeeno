'use client';

import { styled } from "styled-components";

const ContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding: 12px;
    
`;


export function SortByMenu() {
    return (
        <ContainerDiv>
            <button>Novidades</button>
            <button>Preço: Maior - menor</button>
            <button>Preço: Menor - maior</button>
            <button>Mais vendidos</button>
        </ContainerDiv>
    )
}