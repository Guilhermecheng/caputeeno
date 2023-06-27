import { GET_ALL_PRODUCTS, GET_PRODUCTS_BY_CATEGORY } from "@/services/queries";
import { useQuery } from "@apollo/client";

export function useGetProductsList(category: string, orderBy: { orderItem: string, direction: string }) {
    let CURRENT_QUERY;
    let variables;

    if (category === 'all') {
        CURRENT_QUERY = GET_ALL_PRODUCTS;
        variables = { orderItem: orderBy.orderItem, direction: orderBy.direction };

    } else {
        CURRENT_QUERY = GET_PRODUCTS_BY_CATEGORY;
        variables = { category: category, orderItem: orderBy.orderItem, direction: orderBy.direction };
    }

    const { loading, error, data } = useQuery(CURRENT_QUERY, {
        variables,
    });
    return {loading, error, data};
};