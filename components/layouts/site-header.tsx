"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { signOut } from "@/utils/supabase-auth/authGoogle";

export default function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen] = useState(false);
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const isActive = (href: string) => pathname === href;

  // ログアウトする
  async function handleLogout() {
    const success = await signOut();
    if (success) {
      router.push("/login");
    }
  }

  // // ドロップダウンメニューの背景クリックしたらドロップダウンメニュー閉じる
  // useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent) => {
  //     if (
  //       dropdownRef.current &&
  //       !dropdownRef.current.contains(event.target as Node)
  //     ) {
  //       setIsDropdownOpen(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm shadow-lg">
      <div className="flex h-16 items-center justify-between px-4 w-full">
        {/* Left: Logo + Menu Button */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <Link href="/" className="flex items-center gap-1">
            <motion.div
              whileHover={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 0.6 }}
              className=""
            >
              <div className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-white"
                >
                  <path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z"></path>
                  <path d="M12 13v8"></path>
                  <path d="M5 13v6a2 2 0 0 0 2 2h8"></path>
                </svg>
              </div>
            </motion.div>
            <span className="text-xl font-bold text-purple-600">
              Tip<span className="text-pink-500">Star</span>
            </span>
          </Link>
        </div>

        {/* Center: Navigation */}
        <nav className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-4">
          {[
            { href: "/", label: "ホーム" },
            { href: "/my-tips", label: "My Tips" },
            { href: "/mypage", label: "マイページ" },
            { href: "/donate", label: "投げ銭" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative text-base font-medium transition-colors hover:text-purple-600 ${
                isActive(item.href) ? "text-purple-600" : "text-gray-600"
              }`}
            >
              {isActive(item.href) && (
                <motion.span
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 h-0.5 w-full bg-purple-500"
                />
              )}
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right: Avatar */}
        <div className="flex items-center gap-2">
          <div className="dropdown dropdown-end relative" ref={dropdownRef}>
            <button
              onClick={handleLogout}
              className="btn btn-outline btn-secondary"
            >
              ログアウト
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (AnimatePresenceでスライド) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-16 z-40 flex flex-col bg-white p-6 md:hidden"
          >
            <nav className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-lg font-medium text-gray-600 hover:text-purple-600"
              >
                ホーム
              </Link>
              <Link
                href="/donate"
                className="text-lg font-medium text-gray-600 hover:text-purple-600"
              >
                投げ銭
              </Link>
              <Link
                href="my-tips"
                className="text-lg font-medium text-gray-600 hover:text-purple-600"
              >
                My Tips
              </Link>
              <Link
                href="/profile"
                className="text-lg font-medium text-gray-600 hover:text-purple-600"
              >
                プロフィール
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
