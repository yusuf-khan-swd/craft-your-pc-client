import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://craft-your-pc-server.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.data);
      });
  }, []);

  const { data: session } = useSession();

  const menuItems = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>Categories</summary>
          <ul className="p-2 w-48">
            {categories &&
              categories.length > 0 &&
              categories.map((category) => (
                <li key={category._id}>
                  <Link href={`/category/${category._id}`}>
                    {category.category_name}
                  </Link>
                </li>
              ))}
          </ul>
        </details>
      </li>
      {session?.user?.email ? (
        <li>
          <button onClick={() => signOut()}>Logout</button>
        </li>
      ) : (
        <li>
          <Link href="/login">Login</Link>
        </li>
      )}
    </>
  );
  return (
    <div className="bg-neutral text-neutral-content">
      <div className="navbar container">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-gray-500 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            CraftYourPC
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 z-[1] text-gray-500">
            {menuItems}
          </ul>
        </div>
        <div className="navbar-end">
          <Link href="/pc-builder" className="btn normal-case">
            PC Builder
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
