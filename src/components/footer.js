import {
  GithubOutlined,
  LinkedinFilled,
  PinterestFilled,
} from "@ant-design/icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-xl">© 2024 Abdul moiz Tahir. All rights reserved.</p>
        <div className="mt-4 mb-10 flex justify-center items-center gap-4 flex-wrap">
          <Link
            href="https://github.com/Abdulmoiztahir"
            className="text-2xl text-gray-400 hover:text-white "
          >
            {" "}
            <GithubOutlined className="text-gray-200" />
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/abdull-moiz-b27438313/"
            className="text-2xl  text-gray-400 hover:text-white "
          >
            <LinkedinFilled className="text-[#0077B5]" />
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}
