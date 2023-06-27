import { gql } from "@apollo/client";

/* Hygraph API queries */

export const HYGRAPH_GET_ALL_PRODUCTS = gql`
    query allProducts($orderBy: String!) {
        products(orderBy: $orderBy) {
            id
            name
            category
            # description
            priceInCents
            sales
            imageUrl
            # createdAt
            # publishedAt
            # updatedAt
        }
    }
`;

export const HYGRAPH_PRODUCTS_BY_CATEGORY = gql`
    query GetProductByCategory($orderBy: String!, $category: String!) {
        products(orderBy: $orderBy, where: { category: $category }) {
            id
            name
            category
            imageUrl
            priceInCents
            sales
        }
    }
`;


/* fake API queries */

export const GET_ALL_PRODUCTS = gql`
    query GetAllProducts($orderItem: String!, $direction: String!) {
        allProducts(sortOrder:$direction, sortField:$orderItem) {
            id
            name
            image_url
            category
            price_in_cents
        }
    }
`;

export const GET_PRODUCTS_BY_CATEGORY = gql`
    query GetCategoryProducts($category: String!, $orderItem: String!, $direction: String!) {
        allProducts (filter: {category: $category }, sortOrder:$direction, sortField:$orderItem) {
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
            image_url
            category
            price_in_cents
        }
    }
`;