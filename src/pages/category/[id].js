import RootLayout from "@/components/Layouts/RootLayout";
import { useRouter } from "next/router";
import React from "react";

const CategoryDetailsPage = () => {
  const router = useRouter();
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
