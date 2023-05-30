import { gql } from "@apollo/client";

export const GET_ALL_PRODUCTS = gql`
    query {
        allProducts {
            id
            name
            image_url
            category
            price_in_cents
        }
    }
`