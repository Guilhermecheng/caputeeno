import { 
    GET_ALL_PRODUCTS, 
    GET_PRODUCTS_BY_CATEGORY, 
    SEARCH_PRODUCTS,
    HYGRAPH_GET_ALL_PRODUCTS, 
    HYGRAPH_PRODUCTS_BY_CATEGORY, 
    HYGRAPH_SEARCH_PRODUCTS, 
} from "@/services/queries";

import { useQuery } from "@apollo/client";

// export function useGetProductsList(searchQuery: string, category: string, orderBy: { orderItem: string, direction: string }) {
    export function useGetProductsList(searchQuery: string, category: string, orderBy: string) {
    let CURRENT_QUERY;
    let variables;

    if(searchQuery) {
        // CURRENT_QUERY = SEARCH_PRODUCTS;
        // variables = { search: searchQuery, orderItem: orderBy.orderItem, direction: orderBy.direction };
        CURRENT_QUERY = HYGRAPH_SEARCH_PRODUCTS;
        variables = { search: searchQuery, orderBy };
    } else {
        if (category === 'all') {
            // CURRENT_QUERY = GET_ALL_PRODUCTS;
            // variables = { orderItem: orderBy.orderItem, direction: orderBy.direction };
            console.log("foi no geral");
            CURRENT_QUERY = HYGRAPH_GET_ALL_PRODUCTS;
            variables = { orderBy: orderBy };
    
        } else {
            // CURRENT_QUERY = GET_PRODUCTS_BY_CATEGORY;
            // variables = { category: category, orderItem: orderBy.orderItem, direction: orderBy.direction };÷
            CURRENT_QUERY = HYGRAPH_PRODUCTS_BY_CATEGORY;
            variables = { category: category, orderBy };
        }
    }


    const { loading, error, data } = useQuery(CURRENT_QUERY, {
        variables,
    });
    return {loading, error, data};
};