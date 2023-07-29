import RootLayout from "@/components/Layouts/RootLayout";
import ProductCard from "@/components/UI/ProductCard";
import Head from "next/head";

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
      <div className="grid grid-cols-3 gap-5 p-10 w-[80%] mx-auto">
        {products && products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <p>No products available.</p>
        )}
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
    };
  } catch (error) {
    return {
      props: { products: [], categories: [] },
    };
  }
};
