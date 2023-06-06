import { createContext, Dispatch, SetStateAction } from "react";

interface CategoryContextProps {
    CategoryValue: "all" | "mugs" | "t-shirts";
    setCategoryValue: Dispatch<SetStateAction<"all" | "mugs" | "t-shirts">>;
}

export const CategoryContext = createContext<CategoryContextProps>({
    CategoryValue: "all",
    setCategoryValue: () => {}
});