import RootLayout from "@/components/Layouts/RootLayout";
import { useRouter } from "next/router";
import React from "react";

const CategoryDetailsPage = ({ products, category }) => {
  const router = useRouter();

  console.log("inside category details page", products);
  console.log("inside category details page", category);

  return (
    <div>
      <h1>Category Details Page {router.query.id}</h1>
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

  return {
    props: {
      products: data.data,
      category: data.category,
    },
  };
};
