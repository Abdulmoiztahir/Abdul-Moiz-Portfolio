import {
  GithubOutlined,
  LinkedinFilled,
} from "@ant-design/icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pb-12 pt-8">
      <div className="container-shell glass-card flex flex-col items-center justify-between gap-4 px-6 py-6 text-center md:flex-row md:text-left">
        <p className="text-sm text-slate-300">
          © 2026 Abdul Moiz Tahir. Crafted with precision and modern web standards.
        </p>
        <div className="flex items-center gap-5">
          <Link
            href="https://github.com/Abdulmoiztahir"
            className="inline-flex items-center gap-2 rounded-lg border border-transparent px-2 py-1 text-sm font-medium text-slate-300 transition duration-300 hover:border-white/15 hover:bg-white/10 hover:text-cyan-100"
            target="_blank"
            rel="noreferrer"
          >
            <GithubOutlined />
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/abdull-moiz-b27438313/"
            className="inline-flex items-center gap-2 rounded-lg border border-transparent px-2 py-1 text-sm font-medium text-slate-300 transition duration-300 hover:border-white/15 hover:bg-white/10 hover:text-cyan-100"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinFilled />
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}
