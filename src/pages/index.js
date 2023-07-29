// import RootLayout from "@/components/Layouts/RootLayout";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";

const categories = [
  "CPU / Processor",
  "Motherboard",
  "RAM",
  "Power Supply Unit",
  "Storage Device",
  "Monitor",
  "Others",
];

const HomePage = ({ abc }) => {
  console.log("Inside HomePage", abc);
  const { data: session } = useSession();
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
      <h1>Home Page {session?.user.email}</h1>
      <h2>Featured Products</h2>
      <div>
        <p>Product1</p>
        <p>Product2</p>
      </div>
      <h3>Featured Category</h3>
      {categories.map((category, index) => (
        <Link href={`/category/${category}`} key={index}>
          <button className="btn m-1">{category}</button>
        </Link>
      ))}
    </>
  );
};
export default HomePage;

// HomePage.getLayout = function getLayout(page) {
//   return <RootLayout>{page}</RootLayout>;
// };

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/products");
  const products = await res.json();
  console.log("Inside getStaticProps", products?.data?.length);
  return {
    props: { abc: "abc" },
    revalidate: 30,
  };
};
