"use client";

import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-blue-900 border-b border-gray-700 flex items-center justify-between px-8 z-50">
      
      {/* Logo / App Name */}
      <Link href="/" className="text-2xl font-bold tracking-wide">
        TaoView
      </Link>

      {/* Links */}
      <div className="flex items-center space-x-8 text-gray-300">
        <Link href="/subnets" className="hover:text-white transition">
          Subnets
        </Link>
        <Link href="/account" className="hover:text-white transition">
          Account
        </Link>
      </div>
    </nav>
  );
}
