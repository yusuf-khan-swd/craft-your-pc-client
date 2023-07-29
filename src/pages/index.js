import RootLayout from "@/components/layout/RootLayout";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const categories = [
  "CPU / Processor",
  "Motherboard",
  "RAM",
  "Power Supply Unit",
  "Storage Device",
  "Monitor",
  "Others",
];

const HomePage = () => {
  const { data: session } = useSession();

  return (
    <div>
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
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
