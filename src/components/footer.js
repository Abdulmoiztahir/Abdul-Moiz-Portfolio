import {
  GithubOutlined,
  LinkedinFilled,
  PinterestFilled,
} from "@ant-design/icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background text-foreground py-4 border-t border-border">
      <div className="container mx-auto text-center">
        <p className="text-xl text-muted-foreground">© 2024 Abdul moiz Tahir. All rights reserved.</p>
        <div className="mt-4 mb-10 flex justify-center items-center gap-4 flex-wrap">
          <Link
            href="https://github.com/Abdulmoiztahir"
            className="text-2xl text-muted-foreground hover:text-foreground transition-colors"
          >
            {" "}
            <GithubOutlined className="mr-2" />
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/abdull-moiz-b27438313/"
            className="text-2xl text-muted-foreground hover:text-foreground transition-colors"
          >
            <LinkedinFilled className="text-[#0077B5] mr-2" />
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}
