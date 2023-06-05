import { GET_PRODUCT } from "@/services/queries";
import { useQuery } from "@apollo/client";
import { styled } from "styled-components";
import { Loading } from "./Loading";

const ProductDiv = styled.div`
display: flex;
flex-direction: column;
margin-top: 24px;

@media(min-width:768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
}
`;

interface ProductContentProps {
    id: string;
};

export function ProductContent({ id }: ProductContentProps) {

    const { data } = useQuery(GET_PRODUCT, {
        variables: {
            productID: id,
        }
    });
    console.log(data)
    if(!data) return <Loading />;

    return (
        <ProductDiv>
            <div>
                <img src={data.Product.image_url} alt={data.Product.name} />
            </div>
            <div>
                <h3>{data.Product.category}</h3>

                <h1>{data.Product.name}</h1>

                <span>*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</span>

                <h2>{data.Product.description}</h2>

            </div>
        </ProductDiv>
    )
}