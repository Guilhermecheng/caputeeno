import { GET_ALL_PRODUCTS, GET_PRODUCTS_BY_CATEGORY } from "@/services/queries";
import { useQuery } from "@apollo/client";

export function useGetProductsList(category: string) {
    let CURRENT_QUERY;
    let variables;

    if (category === 'all') {
        CURRENT_QUERY = GET_ALL_PRODUCTS;

    } else {
        CURRENT_QUERY = GET_PRODUCTS_BY_CATEGORY;
        variables = { category: category };
    }

    const { loading, error, data } = useQuery(CURRENT_QUERY, {
        variables,
    });
    return {loading, error, data};
};