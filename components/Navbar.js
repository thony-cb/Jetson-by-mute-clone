import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-10 min-w-[60%] py-2 px-4 bg-white rounded-full flex justify-between">
      <div className="flex text-xl font-medium text-black w-fit">
        Jeston | MUTE.
      </div>
      <ul className="flex items-center">
        <li className="px-2 text-sm text-black">Pods</li>
        <li className="px-2 text-sm text-black">Technology</li>
        <li className="px-2 text-sm text-black">Configure</li>
        <li className="px-2 text-sm text-black">Specs & Downloads</li>
      </ul>
      <button className="px-2 py-1 text-sm text-white bg-blue-800 rounded-full">
        I want one
      </button>
    </nav>
  );
}
