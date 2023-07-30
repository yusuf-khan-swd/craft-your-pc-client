import { useRouter } from "next/router";
import errorImage from "../assets/images/404_illustration.png";
import Image from "next/image";
import Link from "next/link";

const ErrorPage = () => {
  const router = useRouter();

  setTimeout(() => {
    router.push("/");
  }, 3000);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Image src={errorImage} alt="" width={600} height={400} />

      <Link href="/">
        <button className="btn btn-ghost bg-gray-300 btn-sm">
          Back To Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
