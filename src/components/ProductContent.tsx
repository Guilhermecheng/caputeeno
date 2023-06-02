import { GET_PRODUCT } from "@/services/queries";
import { useQuery } from "@apollo/client";
import { styled } from "styled-components";

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

    const { loading, data } = useQuery(GET_PRODUCT, {
        variables: {
            productID: id,
        }
    });
    console.log(data)

    return (
        <ProductDiv>
            <div>
                image
            </div>
            <div>
                <h3>Caneca</h3>

                <h1>Caneca linda</h1>

                <span>*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</span>

                <h2>Descrição</h2>

            </div>
        </ProductDiv>
    )
}