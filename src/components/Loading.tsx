'use client'

import { styled } from "styled-components"

const LoadingDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    color: var(--color-gray-700);

`

export function Loading() {
    return (
        <LoadingDiv>
            Loading...
        </LoadingDiv>
    )
}