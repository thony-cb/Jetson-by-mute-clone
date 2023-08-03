import React from "react";
import ContactButton from "./ui/ContactButton";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-10 min-w-[60%] py-2 px-4 bg-white rounded-full flex justify-between">
      <div className="flex text-xl font-medium text-black w-fit">
        <Link href={"/"}>Jeston | MUTE.</Link>
      </div>
      <ul className="flex items-center">
        <li className="px-2 text-sm text-black">
          <Link href={"/pods"}>Pods</Link>
        </li>
        <li className="px-2 text-sm text-black">
          <Link href={"/"}>Technology</Link>
        </li>
        <li className="px-2 text-sm text-black">
          <Link href={"/"}>Configure</Link>
        </li>
        <li className="px-2 text-sm text-black">
          <Link href={"/"}>Specs & Downloads</Link>
        </li>
      </ul>
      <div>
        <ContactButton />
      </div>
    </nav>
  );
}
