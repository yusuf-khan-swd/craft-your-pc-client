import RootLayout from "@/components/Layouts/RootLayout";
import Link from "next/link";
import React from "react";

const PCBuilderPage = ({ categories }) => {
  console.log("Inside Pc builder page", categories);
  categories = categories.filter(
    (category) => category.category_name !== "Others"
  );

  return (
    <div className="w-[90%] mx-auto py-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-2 m-2 mb-16 mx-auto">
        {categories && categories.length > 0 ? (
          categories.map((category) => (
            <div key={category._id}>
              <p>{category.category_name}</p>
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
