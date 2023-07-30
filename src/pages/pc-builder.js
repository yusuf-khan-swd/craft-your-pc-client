import RootLayout from "@/components/Layouts/RootLayout";
import Link from "next/link";
import { useSelector } from "react-redux";

const PCBuilderPage = ({ categories }) => {
  categories = categories.filter(
    (category) => category.category_name !== "Others"
  );

  const { products } = useSelector((state) => state.pcBuilder);

  const handleCompleteBuild = () => {
    alert("Success at building your dream pc.");
  };

  return (
    <div className="w-[90%] mx-auto py-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  mx-auto my-6">
        {categories && categories.length > 0 ? (
          categories.map((category) => (
            <div key={category._id} className="border p-4 m-3 rounded-lg">
              <p className="text-center my-1 font-semibold">
                {category.category_name}
              </p>

              <Link
                href={`/pc-builder/${category._id}`}
                className="btn m-1 w-full normal-case"
              >
                Choose
              </Link>
            </div>
          ))
        ) : (
          <p>No categories available.</p>
        )}
      </div>
      {products &&
        products.length > 0 &&
        products.map((product) => (
          <p key={product._id} className="m-1">
            <span className="font-semibold">{product.category} :</span>{" "}
            {product.name}
          </p>
        ))}
      <div>
        <button
          disabled={products?.length >= 5 ? false : true}
          className="btn btn-primary w-full my-4 normal-case"
          onClick={handleCompleteBuild}
        >
          Complete Build
        </button>
      </div>
    </div>
  );
};

export default PCBuilderPage;

PCBuilderPage.getLayout = function (page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  try {
    const res = await fetch(
      "https://craft-your-pc-server.vercel.app/categories"
    );
    const categories = await res.json();

    return {
      props: { categories: categories?.data },
    };
  } catch (error) {
    return {
      props: { categories: [] },
    };
  }
};
