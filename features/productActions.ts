import { Category, Drink, DrinksResponse } from "@/types/product";

const getProducts = async () => {
  const data = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
  )
    .then((res) => res.json())
    .catch((e) => {
      return { drinks: [] };
    });
  return data as DrinksResponse;
};

const searchProducts = async (query: string) => {
  const data = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`
  )
    .then((res) => res.json())
    .catch((e) => {
      return { drinks: [] };
    });
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

async function getCategories(): Promise<Category[]> {
  const ingredients = new Set<Category>();

  try {
    const data = await getProducts();
    const products = data.drinks;

    const titles: string[] = [];

    for (let i = 0; i < products.length; i++) {
      const ingredient = products[i].strCategory;
      if (ingredient) {
        if (!titles.includes(ingredient)) {
          titles.push(ingredient);

          ingredients.add({
            title:  ingredient.split(/[\s/]+/)[0],
            imageUrl: products[i].strDrinkThumb,
          });
        }
      }
    }
  } catch (error) {
    console.error("Error fetching products:", error);
  }

  return Array.from(ingredients);
}

const productActions = {
  getProducts,
  searchProducts,
  getIngredients,
  getCategories,
};

export default productActions;
