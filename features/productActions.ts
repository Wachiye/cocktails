import { Drink, DrinksResponse } from "@/types/product";

export default function productActions() {
  const getProducts = async () => {
    const data = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
    ).then((res) => res.json());
    return data as DrinksResponse;
  };

  const searchProducts = async (query: string) => {
    const data = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`
    ).then((res) => res.json());
    return data as DrinksResponse;
  };

  function getIngredients(product: Drink): string[] {
    const ingredients: string[] = [];
  
    for (let i = 1; i <= 15; i++) {
      const ingredient = product[`strIngredient${i}` as keyof Drink];
      if (ingredient) {
        ingredients.push(ingredient);
      }
    }
  
    return ingredients;
  }
  return {
    getProducts,
    searchProducts,
    getIngredients
  };
}
