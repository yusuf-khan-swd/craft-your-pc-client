import Link from "next/link";
const ProductCard = ({ product }) => {
  return (
    <div className="rounded-2xl h-[480px] flex flex-col items-start justify-between p-5 overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all">
      <Link href={`/product/${product._id}`} className="w-full">
        <div className="w-[90%] mx-auto mb-4">
          <img
            src={product?.image}
            alt="product"
            width={300}
            height={180}
            className="h-[280px] mx-auto"
          />
        </div>
        <h1 className="text-xl font-semibold mb-2">{product?.name}</h1>
      </Link>
      <div className="space-y-1">
        <p>Category: {product?.category}</p>
        <p>Rating: {product?.rating}</p>
        <p className="text-sm">Price: ${product?.price}</p>
        <p className="text-sm">
          Status : {product?.status ? "In stock" : "Out of stock"}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
