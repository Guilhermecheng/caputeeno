import { gql } from "@apollo/client";

/* ---------------------------------- Hygraph API queries ---------------------------------- */

export const HYGRAPH_GET_ALL_PRODUCTS = gql`
    query Products($orderBy: ProductOrderByInput = publishedAt_DESC) {
        products(first: 100, orderBy: $orderBy) {
            id
            name
            category
            priceInCents
            sales
            imageUrl
        }
    }
`;

export const HYGRAPH_SEARCH_PRODUCTS = gql`
    query allProducts($orderBy: ProductOrderByInput, $search: String) {
        products(first: 100, orderBy: $orderBy,  where: {_search: $search }) {
            id
            name
            category
            priceInCents
            sales
            imageUrl
        }
    }
`;

export const HYGRAPH_PRODUCTS_BY_CATEGORY = gql`
    query GetProductByCategory($orderBy: ProductOrderByInput, $category: String) {
        products(first: 100, orderBy: $orderBy, where: { category: $category }) {
            id
            name
            category
            imageUrl
            priceInCents
            sales
        }
    }
`;

export const HYGRAPH_GET_PRODUCT = gql`
    query GetProduct($productID: ID) {
        product(where: {id: $productID }) {
            name
            description
            imageUrl
            category
            priceInCents
            sales
        }
    }
`;

/* ---------------------------------- fake API queries ---------------------------------- */

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

export const SEARCH_PRODUCTS = gql`
    query SearchProducts($orderItem: String!, $direction: String!, $search: String!) {
        allProducts(filter: {q: $search }, sortOrder:$direction, sortField:$orderItem) {
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