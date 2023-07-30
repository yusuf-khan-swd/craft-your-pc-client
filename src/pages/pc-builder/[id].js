import RootLayout from "@/components/Layouts/RootLayout";
import { useRouter } from "next/router";

const PCBuilderDetails = ({ products, category }) => {
  console.log("PC Builder details page", products);
  console.log("PC Builder details page", category);
  const router = useRouter();

  const handleAddToBuilder = (product) => {
    router.push("/pc-builder");
    console.log("Add To Build", product);
  };

  return (
    <div className="w-[80%] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  mb-16 mt-4">
        {products && products.length > 0 ? (
          products.map((product) => (
            <div
              key={product._id}
              className="rounded-2xl h-[550px] flex flex-col items-start justify-between p-5 overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all"
            >
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

              <div className="space-y-1">
                <p className="text-sm">Category: {product?.category}</p>
                <p className="text-sm">Price: ${product?.price}</p>
                <p className="text-sm">
                  Status: {product?.status ? "In stock" : "Out of stock"}
                </p>
                <p>Rating: {product?.rating}</p>
              </div>

              <button
                className="btn btn-primary w-full mt-3 mb-2 normal-case"
                onClick={() => handleAddToBuilder(product)}
              >
                Add To Builder
              </button>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
};

export default PCBuilderDetails;

PCBuilderDetails.getLayout = function (page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `http://localhost:5000/category-products/${params.id}`
  );
  const data = await res.json();
  const products = data?.data?.products;
  const category = data?.data?.category;

  return {
    props: {
      products,
      category,
    },
  };
};
