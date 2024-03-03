"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex flex-row justify-between p-8 items-center">
      <span className="hidden text-2xl uppercase font-bold">Karam</span>
      <ul className="hidden md:flex flex-row gap-4">
        <li>
          <Link href={"#about"}>About</Link>
        </li>
        <li>
          <Link href={"#experience"}>Experience</Link>
        </li>
        <li>
          <Link href={"projects"}>Projects</Link>
        </li>
      </ul>
    </nav>
  );
}
