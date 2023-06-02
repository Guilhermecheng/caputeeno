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
`;

export const GET_PRODUCTS_BY_CATEGORY = gql`
    query GetCategoryProducts($category: String!) {
        allProducts (filter: {category: $category }) {
            id
            name
            image_url
            category
            price_in_cents
        }
    }
`;

export const GET_PRODUCT = gql`
    query GetProduct($productID: ID!) {
        Product(id: $productID) {
            name
            description
            created_at
            image_url
            category
        }
    }
`;