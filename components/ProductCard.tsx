import productActions from "@/features/productActions";
import { Drink } from "@/types/product";
import Image from "next/image";

interface ProductCardProps {
  product: Drink;
}
export default function ProductCard({ product }: ProductCardProps) {
  const { getIngredients } = productActions();
  return (
    <div className="w-full flex items-center justify-center bg-gray-100 rounded-lg">
      <div className="w-full border rounded-lg shadow-md p-4">
        <Image
          src={product.strDrinkThumb}
          alt={product.strDrink}
          className="h-48 w-full object-cover mb-4"
          height={192}
          width={500}
        />
        <h3 className="text-lg font-bold mb-2">{product.strCategory}</h3>
        <h5 className="text-sm font-semibold mb-2">{product.strDrink}</h5>
        <p className="text-xs mb-2">{getIngredients(product).join(", ")}</p>
        <button className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700">
          ADD TO CART
        </button>
      </div>
    </div>
  );
}
