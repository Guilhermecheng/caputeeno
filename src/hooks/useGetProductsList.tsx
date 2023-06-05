import { GET_ALL_PRODUCTS, GET_PRODUCTS_BY_CATEGORY } from "@/services/queries";
import { useQuery } from "@apollo/client";

export function useGetProductsList(category: string) {
    if (category === 'all') {
        const { loading, error, data } = useQuery(GET_ALL_PRODUCTS);
        return {loading, error, data};
    } else {
        const { loading, error, data } = useQuery(GET_PRODUCTS_BY_CATEGORY, {
            variables: { category: category },   
        });
        return {loading, error, data};
    }
    
}