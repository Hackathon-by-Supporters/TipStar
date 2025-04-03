"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function SiteHeader() {
    const pathname = usePathname()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const isActive = (href: string) => pathname === href

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
            <div className="container flex h-16 items-center justify-between px-4">
                {/* Left: Logo + Menu Button */}
                <div className="flex items-center gap-2">
                    <button
                        className="btn btn-ghost btn-circle md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-5 w-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-5 w-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        )}
                    </button>

                    <Link href="/" className="flex items-center gap-1">
                        <motion.div
                            whileHover={{ rotate: [0, 15, -15, 0] }}
                            transition={{ duration: 0.6 }}
                            className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1.5"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-white">
                                <path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z"></path>
                                <path d="M12 13v8"></path>
                                <path d="M5 13v6a2 2 0 0 0 2 2h8"></path>
                            </svg>
                        </motion.div>
                        <span className="text-xl font-bold text-purple-600">
                            Tip<span className="text-pink-500">Star</span>
                        </span>
                    </Link>
                </div>

                {/* Center: Navigation */}
                <nav className="hidden md:flex md:items-center md:gap-6">
                    {[
                        { href: "/", label: "ホーム" },
                        { href: "/my-tips", label: "My Tips" },
                        { href: "/donate", label: "投げ銭" },
                        { href: "/profile", label: "プロフィール" },
                    ].map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`relative text-base font-medium transition-colors hover:text-purple-600 ${isActive(item.href) ? "text-purple-600" : "text-gray-600"}`}
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
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-8 rounded-full">
                                <img src="/スクリーンショット 2025-04-02 19.30.37.svg" alt="ユーザー" />
                            </div>
                        </label>
                        <motion.ul
                            tabIndex={0}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.2 }}
                            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 origin-top-right"
                        >
                            <li><Link href="/profile">プロフィール</Link></li>
                            <li><Link href="/my-tips">マイTips</Link></li>
                            <li><Link href="/user-setting">設定</Link></li>
                            <li><a>ログアウト</a></li>
                        </motion.ul>
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
                            <Link href="/" className="text-lg font-medium text-gray-600 hover:text-purple-600">
                                ホーム
                            </Link>
                            <Link href="/donate" className="text-lg font-medium text-gray-600 hover:text-purple-600">
                                投げ銭
                            </Link>
                            <Link href="my-tips" className="text-lg font-medium text-gray-600 hover:text-purple-600">
                                My Tips
                            </Link>
                            <Link href="/profile" className="text-lg font-medium text-gray-600 hover:text-purple-600">
                                プロフィール
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
