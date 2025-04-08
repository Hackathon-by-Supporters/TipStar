"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { signOut } from "@/utils/supabase-auth/authGoogle";
import Image from "next/image";
import { DotGothic16 } from "next/font/google";

const dotGothic16 = DotGothic16({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const isActive = (href: string) => pathname === href;

  async function handleLogout() {
    const success = await signOut();
    if (success) {
      router.push("/login");
    }
  }

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm shadow-lg">
      <div className="flex h-16 items-center justify-between px-4 w-full">
        {/* Left: Logo */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <Link href="/" className="flex gap-1 justify-center items-center">
            <Image
              src="/tipstar2.png"
              alt="TipStar ロゴ"
              width={40}
              height={40}
            />
            <span
              className={`text-3xl font-bold text-purple-500 ${dotGothic16.className}`}
            >
              Tip<span className="text-pink-500">Star</span>
            </span>
          </Link>
        </div>

        {/* Center: Navigation */}
        <nav className="hidden md:flex items-center justify-center space-x-10">
          {[
            { href: "/", label: "ホーム" },
            { href: "/my-tips", label: "My Tips" },
            { href: "/mypage", label: "マイページ" },
            { href: "/donate", label: "♡開発者を応援する" },
          ].map((item) => {
            const isDonate = item.href === "/donate";
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-base font-bold transition-colors ${
                  isDonate
                    ? "text-pink-500 hover:text-pink-600"
                    : active
                    ? "text-purple-600 hover:text-purple-600"
                    : "text-gray-600 hover:text-purple-600"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="underline"
                    className={`absolute -bottom-1 left-0 h-0.5 w-full ${
                      isDonate ? "bg-pink-500" : "bg-purple-500"
                    }`}
                  />
                )}
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: Logout */}
        <div className="flex items-center gap-2">
          <div className="dropdown dropdown-end relative" ref={dropdownRef}>
            <button
              onClick={handleLogout}
              className="btn btn-outline btn-secondary"
            >
              ログアウト
            </button>
          </div>

          {/* ハンバーガーメニュー（モバイル） */}
          <button onClick={toggleMenu} className="md:hidden">
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* モバイルメニュー */}
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
                href="/my-tips"
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
