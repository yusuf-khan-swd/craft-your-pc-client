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
  return (
    <div>
      <h1>Home Page</h1>
      <h2>Featured Products</h2>
      <div>
        <p>Product1</p>
        <p>Product2</p>
      </div>
      <h3>Featured Category</h3>
      {categories.map((category, index) => (
        <Link href={`/category/${category}`} key={index}>
          <li>{category}</li>
        </Link>
      ))}
    </div>
  );
};

export default HomePage;
