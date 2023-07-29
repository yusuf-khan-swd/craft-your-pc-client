import RootLayout from "@/components/Layouts/RootLayout";
import { useRouter } from "next/router";
import React from "react";

const ProductDetailsPage = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Product Details Page{router.query.id}</h1>
    </div>
  );
};

export default ProductDetailsPage;

ProductDetailsPage.getLayout = function (page) {
  return <RootLayout>{page}</RootLayout>;
};
