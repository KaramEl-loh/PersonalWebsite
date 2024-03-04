"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <div>
      <nav className="hidden md:flex flex-row justify-between p-8 items-center">
        <a href="/">
          <span className="cursor-pointer hidden md:block text-2xl uppercase font-bold">
            Karam
          </span>
        </a>
        <ul className="flex flex-row items-center gap-8">
          <li className="hover:font-bold">
            <Link href={"#about"}>About</Link>
          </li>
          <li className="hover:font-bold">
            <Link href={"#experience"}>Experience</Link>
          </li>
          <a href="/Karam_El-loh_resume.docx.pdf" download>
            <Button className="bg-background text-foreground hover:bg-accent hover:text-background">
              Download Resume
              <span>
                <svg
                  className="ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11zm-6 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z"
                  />
                </svg>
              </span>
            </Button>
          </a>
        </ul>
      </nav>
      <nav className="p-4 md:hidden text-right">
        <a href="/Karam_El-loh_resume.docx.pdf" download>
          <Button className="text-xs bg-background text-foreground hover:bg-accent hover:text-background">
            Download Resume
            <span>
              <svg
                className="ml-2"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11zm-6 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z"
                />
              </svg>
            </span>
          </Button>
        </a>
      </nav>
    </div>
  );
}
