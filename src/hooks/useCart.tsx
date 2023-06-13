import { CartContext } from "@/contexts/Cart";
import { useContext } from "react";

interface CartProductProps {
    id: string;
    name: string;
    description: string;
    price_in_cents: number;
    quantity: number;
}


export function useCart(id: string, addOrRemove: "add" | "remove" ) {
    const {cart, setCart} = useContext(CartContext);

    if(addOrRemove == "add") {
        console.log(`adding item ${id} to cart`);
    } else if(addOrRemove == "remove") {
        console.log("remove from cart");
    }

    

    
    // localStorage.setItem("myCart", JSON.stringify(cart));
}