"use client"

import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"

export default function SiteHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
            <div className="container flex h-16 items-center justify-between px-4">
                <div className="flex items-center gap-2">
                    <button
                        className="btn btn-ghost btn-circle md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="h-5 w-5"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="h-5 w-5"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        )}
                    </button>

                    <Link href="/" className="flex items-center gap-1">
                        <motion.div
                            initial={{ rotate: 0 }}
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 5 }}
                            className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1.5"
                        >
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
                        </motion.div>
                        <span className="text-xl font-bold text-purple-600">
                            Campus<span className="text-pink-500">Tips</span>
                        </span>
                    </Link>
                </div>

                <div
                    className={`fixed inset-0 top-16 z-50 flex flex-col bg-white p-6 transition-transform duration-300 md:static md:inset-auto md:flex md:translate-x-0 md:flex-row md:items-center md:gap-6 md:bg-transparent md:p-0 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
                        }`}
                >
                    <nav className="flex flex-col gap-4 md:flex-row md:items-center">
                        <Link href="/" className="text-lg font-medium text-gray-600 hover:text-purple-600 md:text-base">
                            ホーム
                        </Link>
                        <Link href="/donate" className="text-lg font-medium text-gray-600 hover:text-purple-600 md:text-base">
                            投げ銭
                        </Link>
                    </nav>
                </div>

                <div className="flex items-center gap-2">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-8 rounded-full">
                                <img src="/スクリーンショット 2025-04-02 19.30.37.svg" alt="ユーザー" />
                            </div>
                        </label>
                        <ul
                            tabIndex={0}
                            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <Link href="/profile">プロフィール</Link>
                            </li>
                            <li>
                                <Link href="/my-tips">マイTips</Link>
                            </li>
                            <li>
                                <Link href="/user-setting">設定</Link>
                            </li>
                            <li>
                                <a>ログアウト</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}
