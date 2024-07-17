import { Category } from "@/types/product";
import Image from "next/image";
import Link from "next/link";

export default function FlavorCard({ imageUrl, title }: Category) {
  return (
    <Link href={`/products?search=${title}`} className="w-full flex items-center justify-center bg-gray-100 rounded-lg">
      <div className="w-full overflow-hidden rounded-lg hover:shadow-sm">
        <Image
          className="w-full"
          src={imageUrl}
          alt={title}
          width={100}
          height={100}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl text-center">{title}</div>
        </div>
      </div>
    </Link>
  );
}
