'use client'

import { styled } from "styled-components"
import { CgSpinner } from "react-icons/cg"

const LoadingDiv = styled.div`
    width: 100%;
    height: 100%;
    min-height: 40vh;
    display: flex;
    align-items: center;
    justify-content: center;

    color: var(--color-gray-700);
`;

const LoadingSpinner = styled(CgSpinner)`
    animation: spin 1s linear infinite;

    @keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
    }
`;

export function Loading() {
    return (
        <LoadingDiv>
            <LoadingSpinner size={24} />
        </LoadingDiv>
    )
}