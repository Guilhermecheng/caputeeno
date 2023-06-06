import { createContext, Dispatch, SetStateAction } from "react";

interface PaginationContextProps {
    page: number;
    setPage: Dispatch<SetStateAction<number>>;
};

export const PaginationContext = createContext<PaginationContextProps>({
    page: 1,
    setPage: () => {}
});