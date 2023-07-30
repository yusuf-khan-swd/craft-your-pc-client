import RootLayout from "@/components/Layouts/RootLayout";
import ProductCard from "@/components/UI/ProductCard";
import React from "react";

const CategoryDetailsPage = ({ products, category }) => {
  console.log("inside category details page", products);
  console.log("inside category details page", category);

  return (
    <div className="w-[80%] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  mb-16 mt-4">
        {products && products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryDetailsPage;

CategoryDetailsPage.getLayout = function (page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/categories");
  const categories = await res.json();

  const paths = categories.data?.map((category) => ({
    params: { id: category?._id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
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
