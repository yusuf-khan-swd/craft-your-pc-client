import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";

const PCBuilderPage = () => {
  return (
    <div className="container">
      <h1>PC Builder Page</h1>
    </div>
  );
};

export default PCBuilderPage;

PCBuilderPage.getLayout = function (page) {
  return <RootLayout>{page}</RootLayout>;
};
