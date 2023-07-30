import RootLayout from "@/components/Layouts/RootLayout";
import Banner from "@/components/UI/Banner";
import ProductCard from "@/components/UI/ProductCard";
import Head from "next/head";
import Link from "next/link";

const HomePage = ({ products, categories }) => {
  console.log("Inside HomePage products", products);
  console.log("Inside HomePage categories", categories);

  return (
    <>
      <Head>
        <title>Home - CraftYourPC</title>
        <meta
          name="description"
          content="This is a PC Builder Website made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <div className="w-[80%] mx-auto">
        <h1 className="font-semibold text-3xl mt-3 mb-2" id="featured">
          Featured Products
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  mb-16 mt-4">
          {products && products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          ) : (
            <p>No products available.</p>
          )}
        </div>
        <h1 className="font-semibold text-3xl mt-3 mb-2">
          Featured Categories
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-2 m-2 mb-16 mx-auto">
          {categories && categories.length > 0 ? (
            categories.map((category) => (
              <Link
                href={`/category/${category._id}`}
                className="btn m-1 normal-case"
                key={category._id}
              >
                {category.category_name}
              </Link>
            ))
          ) : (
            <p>No categories available.</p>
          )}
        </div>
      </div>
    </>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  try {
    const res = await fetch("http://localhost:5000/products");
    const products = await res.json();

    const res2 = await fetch("http://localhost:5000/categories");
    const categories = await res2.json();

    return {
      props: { products: products?.data, categories: categories?.data },
      revalidate: 30,
    };
  } catch (error) {
    return {
      props: { products: [], categories: [] },
    };
  }
};
