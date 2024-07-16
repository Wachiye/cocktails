import Image from "next/image";

export default function FlavorCard() {
  return (
    <div className="w-full flex items-center justify-center bg-gray-100 rounded-lg">
      <div className="w-full overflow-hidden rounded-lg hover:shadow-sm">
        <Image
          className="w-full"
          src="/path/to/your/image.png"
          alt="Cranberry Breezer"
          width={100}
          height={100}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl text-center">CRANBERRY</div>
        </div>
      </div>
    </div>
  );
}
