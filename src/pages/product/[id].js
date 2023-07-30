import RootLayout from "@/components/Layouts/RootLayout";
import ProductDetails from "@/components/UI/ProductDetails";
import { useRouter } from "next/router";
import React from "react";

const ProductDetailsPage = ({ product }) => {
  console.log("ProductDetailsPage", product);

  return <ProductDetails product={product} />;
};

export default ProductDetailsPage;

ProductDetailsPage.getLayout = function (page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("https://craft-your-pc-server.vercel.app/products");
  const products = await res.json();

  const paths = products.data?.map((product) => ({
    params: { id: product?._id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://craft-your-pc-server.vercel.app/product/${params.id}`
  );
  const data = await res.json();

  return {
    props: {
      product: data?.data,
    },
  };
};
