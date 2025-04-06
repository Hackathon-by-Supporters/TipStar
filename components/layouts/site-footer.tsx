import Image from "next/image";
import Link from "next/link";
import { DotGothic16 } from "next/font/google";

const dotGothic16 = DotGothic16({
    weight: "400", // DotGothic16 は 400 のみです
    subsets: ["latin"],
    display: "swap", // 推奨設定
});
export default function SiteFooter() {

    return (
        <footer className="border-t bg-gray-50">
            <div className="container px-4 py-8 md:py-12">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <Link href="/" className="flex items-center">
                            <div className="">
                                <Image
                                    src="/star_2.jpeg"
                                    alt="TipStarロゴ"
                                    width={60}
                                    height={60}
                                    className="object-cover"
                                />
                            </div>
>>>>>>> 2d0d1ee (マイページ背景変更)

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
                                <h3 className="mb-4 text-lg font-semibold text-gray-900">
                                    サポート
                                </h3>
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
                    <p>© {new Date().getFullYear()} TipStar. All rights reserved.</p>
                </div>
        </footer>
    );
}
