import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className="hero min-h-[90vh] bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-8">
            Leading Computer, Laptop & Gaming PC Retail & Online Shop in
            Bangladesh Technology has become a part of our daily lives, and we
            depend on tech products daily for a vast portion of our lives. There
            is hardly a home in Bangladesh without a tech product. This is where
            we come in. Craft Your PC Ltd.{" "}
          </p>
          <Link href="/login">
            <button className="btn btn-primary">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
