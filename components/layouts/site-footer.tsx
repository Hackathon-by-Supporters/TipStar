import { footer } from "framer-motion/m";
import Link from "next/link";

export default function SiteFooter() {
    return (
        <footer className="border-t bg-gray-50">
            <div className="container px-4 py-8 md:py-12">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <Link href="/" className="flex items-center gap-1">
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
                            <span className="text-xl font-bold text-purple-600">
                                Campus<span className="text-pink-500">Tips</span>
                            </span>
                        </Link>
                        <p className="mt-4 text-sm text-gray-600">
                            大学生活をより良くするためのTipsを共有するプラットフォーム。みんなの知恵を集めて、キャンパスライフを充実させよう！
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-4 text-lg font-semibold text-gray-900">リンク</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="#" className="text-gray-600 hover:text-purple-600">
                                    ホーム
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-600 hover:text-purple-600">
                                    人気のTips
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-600 hover:text-purple-600">
                                    カテゴリー
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-600 hover:text-purple-600">
                                    イベント
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-600 hover:text-purple-600">
                                    ランキング
                                </Link>
                            </li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className="mb-4 text-lg font-semibold text-gray-900">サポート</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="#" className="text-gray-600 hover:text-purple-600">
                                    お問い合わせ
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-600 hover:text-purple-600">
                                    よくある質問
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-600 hover:text-purple-600">
                                    利用規約
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-600 hover:text-purple-600">
                                    プライバシーポリシー
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 border-t border-gray-200 pt-6 text-center text-sm text-gray-500"></div>
                    <p>© {new Date().getFullYear()} CampusTips. All rights reserved.</p> 
            </div>
        </footer>
    );
}
