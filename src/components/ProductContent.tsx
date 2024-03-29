import { GlobalContext } from "@/contexts/GlobalContext";
import { GET_PRODUCT, HYGRAPH_GET_PRODUCT } from "@/services/queries";
import { useQuery } from "@apollo/client";
import { useContext } from "react";
import { RiShoppingBag3Line } from "react-icons/ri";
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

const ProductInformationSection = styled.div`
    color: var(--color-gray-800);
    position: relative;

    h3 {
        font-size: 16px;
        font-weight: 400;
        line-height: 150%;

        margin-bottom: 12px;
    }

    h1 {
        font-size: 32px;
        font-weight: 300;
        line-height: 150%;

        margin-bottom: 4px;
    }

    h2 {
        color: var(--color-almost-black);
        font-weight: 600;
        font-size: 20px;
        line-height: 150%;

        margin-bottom: 24px;;
    }

    span {
        font-weight: 400;
        font-size: 12px;
        line-height: 150%;
    }

    button {
        position: absolute;
        bottom: 8px;
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: var(--color-button-blue);
        color: var(--color-gray-100);
        border-radius: 4px;
        border: none;
        cursor: pointer;
        padding: 10px 0;

        font-weight: 500;
        font-size: 16px;
        line-height: 150%;

        &:hover {
            opacity: 0.8;
        }
    }
`;

const DescriptionSections = styled.div`
    margin-top: 58px;

    h3 {
        color: var(--color-gray-600);
        font-weight: 500;
        font-size: 16px;
        line-height: 150%;
        text-transform: uppercase;

    }

    p {
        margin-top: 8px;
        font-weight: 400;
        font-size: 14px;
        line-height: 150%;
    }
`;

interface ProductContentProps {
    id: string;
};

export function ProductContent({ id }: ProductContentProps) {
    const {cart, setCart} = useContext(GlobalContext);

    let price_in_brazilian_reais;

    const { data } = useQuery(HYGRAPH_GET_PRODUCT, {
        variables: {
            productID: id,
        }
    });
    if(!data) return <Loading />;

    if(data) {
        console.log(data.product)
        price_in_brazilian_reais = (data.product.priceInCents / 100).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    }

    function addToCart(productID: string) {
        let  cartItem = cart.findIndex(o => o.id === productID);

        if(cartItem >= 0) {
            let newCart = cart;
            newCart[cartItem].quantity++;
            
            localStorage.setItem("caputeeno-cart", JSON.stringify([...cart]));
            setCart([...cart]);

        } else {
            let newItem = {
                id: productID,
                name: data.product.name as string,
                description: data.product.description as string,
                priceInCents: data.product. priceInCents as number,
                imageUrl: data.product. imageUrl as string,
                quantity: 1,
    
            }
    
            let newArray = [...cart, newItem];
            localStorage.setItem("caputeeno-cart", JSON.stringify(newArray));
            setCart(newArray);

        }
    };

    return (
        <ProductDiv>
            <div>
                <img src={data.product.imageUrl} alt={data.product.name} />
            </div>
            <ProductInformationSection>
                <h3>{data.product.category}</h3>

                <h1>{data.product.name}</h1>
                <h2>{price_in_brazilian_reais}</h2>

                <span>*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</span>

                <DescriptionSections>
                    <h3>Descrição</h3>
                    <p>{data.product.description}</p>
                </DescriptionSections>

                <button onClick={() => addToCart(id)}>
                    <RiShoppingBag3Line size={24} style={{ marginRight: 16 }} />
                    Adicionar ao carrinho
                </button>
            </ProductInformationSection>
        </ProductDiv>
    )
}