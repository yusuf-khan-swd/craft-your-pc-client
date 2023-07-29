import RootLayout from "@/components/Layouts/RootLayout";
import Head from "next/head";

const HomePage = ({ products }) => {
  console.log("Inside HomePage", products);

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
      <div>Home Page</div>
    </>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/products");
  const products = await res.json();
  console.log("Inside getStaticProps", products?.data?.length);
  return {
    props: { products: products?.data },
    revalidate: 30,
  };
};
