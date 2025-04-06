
import { getUserProfile } from "@/utils/userget/usersget"
import { Poppins } from "next/font/google"
import { Montserrat, M_PLUS_Rounded_1c, Noto_Sans_JP } from 'next/font/google'
import Image from "next/image"


import { DotGothic16 } from "next/font/google";

const dotGothic16 = DotGothic16({
    weight: "400", // DotGothic16 は 400 のみです
    subsets: ["latin"],
    display: "swap", // 推奨設定
});
const NotoSansJP = Noto_Sans_JP({ subsets: ["latin"], weight: ["600"] });
const mplus = M_PLUS_Rounded_1c({ subsets: ["latin"], weight: ["500"] });

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

// ポイントに基づいて背景色を決定する関数
function getBackgroundColorByPoints(points: number): string {
    // 10ポイントごとに色が変わる
    const colorIndex = Math.floor(points / 10) % 5;

    switch (colorIndex) {
        case 0:
            return "from-pink-100 via-purple-100 to-indigo-100"; // デフォルト
        case 1:
            return "bg-gradient-to-r from-blue-200 to-cyan-200"; // 青系
        case 2:
            return "bg-gradient-to-br from-yellow-50 to-amber-100 border-yellow-200"; // 黄色系
        case 3:
            return "bg-gradient-to-r from-teal-200 to-teal-500"; // 緑系
        case 4:
            return "bg-gradient-to-r from-purple-500 to-purple-900"; // 紫系
        default:
            return "from-pink-100 via-purple-100 to-indigo-100";
    }
}

// ポイントに基づいてテキストカラーを決定する関数
function getTextColorByPoints(points: number): string {
    const colorIndex = Math.floor(points / 10) % 5;

    switch (colorIndex) {
        case 0:
            return "text-indigo-700"; // デフォルト
        case 1:
            return "text-blue-700"; // 青系
        case 2:
            return "text-amber-700"; // 黄色系
        case 3:
            return "text-green-700"; // 緑系
        case 4:
            return "text-purple-700"; // 紫系
        default:
            return "text-indigo-700";
    }
}

// ポイントに基づいてカードの背景色を決定する関数
function getCardBgColorByPoints(points: number): string {
    const colorIndex = Math.floor(points / 10) % 5;

    switch (colorIndex) {
        case 0:
            return "bg-gradient-to-br from-white to-gray-100 border-gray-200"; // 白
        case 1:
            return "bg-gradient-to-r from-teal-200 to-teal-500"; // 青
        case 2:
            return "bg-gradient-to-r from-amber-200 to-yellow-500"; // 黄
        case 3:
            return "bg-gradient-to-br from-green-200 to-green-200 border-green-200"; // 緑
        case 4:
            return "bg-gradient-to-br from-purple-200 to-purple-300 border-purple-200"; // 紫
        default:
            return "bg-gradient-to-br from-white to-gray-100 border-gray-200";
    }
}

// ポイントに基づいてランク名を決定する関数
function getRankNameByPoints(points: number): string {
    const colorIndex = Math.floor(points / 10) % 5;

    switch (colorIndex) {
        case 0:
            return "ホワイトランク"; // 白
        case 1:
            return "ブルーランク"; // 青
        case 2:
            return "イエローランク"; // 黄
        case 3:
            return "グリーンランク"; // 緑
        case 4:
            return "パープルランク"; // 紫
        default:
            return "ホワイトランク";
    }
}

export default async function MyPage() {
    const result = await getUserProfile();

    const username = result.success ? result.profile?.username : "ゲスト";
    const points = result.success ? result.profile?.points : 0;

    // ポイントに基づいて背景色とテキストカラーを取得
    const bgGradient = getBackgroundColorByPoints(points);
    const titleColor = getTextColorByPoints(points);
    const cardBgColor = getCardBgColorByPoints(points);
    const rankName = getRankNameByPoints(points);

    // 現在の色レベルを取得
    const colorLevel = Math.floor(points / 10) % 5;
    const colorNames = ["白", "青", "黄", "緑", "紫"];
    const currentColorName = colorNames[colorLevel];

    // 次の色変更までのポイント数を計算
    const pointsToNextColor = 10 - (points % 10);



    return (
        <div className="relative min-h-screen overflow-hidden">
            <Image
                src="/背景.avif"
                alt="背景"
                layout="fill"
                objectFit="cover"
                quality={100}
                className="-z-10 opacity-90"
                priority
            />



            <main className="mx-auto max-w-7xl px-4 py-8">
                <div className="text-center mb-8">

                    <h2 className={`text-3xl font-bold relative inline-block ${NotoSansJP.className}`}>マイページ</h2>
                    <p className="mt-2 text-gray-600">🌏 あなたのプロフィールと獲得ポイント</p>
                </div>

                {/* ユーザー情報 + ランクカード統合 */}
                <div className={`max-w-md mx-auto rounded-xl shadow-md overflow-hidden border ${cardBgColor} mb-8`}>
                    <div className="p-8 space-y-4">

                        {/* ユーザー情報 */}
                        <div className="text-center space-y-4 bg-white/70 p-6 rounded-xl shadow-md">
                            {/* ユーザー名 */}
                            <div className="avatar">
                                <div className="w-24 rounded-full">
                                    <img src="data:image/jpeg;base64,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" />
                                </div>
                            </div>
                            <p className="text-2xl font-bold text-gray-700">
                                <span className="text-black-600">{username}</span>
                            </p>

                            {/* ポイント */}
                            <p className="text-xl font-semibold text-gray-700">
                                ポイント：<span className="text-red-500 text-3xl font-extrabold">{points} pt</span>
                            </p>

                            <h3 className={`text-xl font-bold ${titleColor}`}>現在のランク</h3>
                            <h4 className={`text-2xl font-bold ${titleColor} mt-2`}>{rankName}</h4>
                            <p className="text-gray-600 text-sm mt-1">
                                {colorLevel === 0 && "初心者ランクです。これからポイントを貯めていきましょう！"}
                                {colorLevel === 1 && "ブルーランクに到達しました。順調にポイントを貯めています！"}
                                {colorLevel === 2 && "イエローランクに到達しました。素晴らしい進歩です！"}
                                {colorLevel === 3 && "グリーンランクに到達しました。上級者の証です！"}
                                {colorLevel === 4 && "パープルランクに到達しました。エキスパートの証です！"}
                            </p>



                        </div>


                        {/* ランク情報 */}


                        {/* 色・進捗バー */}
                        <div className="mt-4 pt-4 border-t border-gray-100">
                            <p className="text-sm text-gray-600">
                                現在の色: <span className="font-medium">{currentColorName}</span>
                            </p>
                            <p className="text-sm text-gray-600">
                                次の色変更まであと <span className="font-medium text-red-600">{pointsToNextColor}</span> ポイント
                            </p>
                            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                                <div
                                    className={`h-2 rounded-full transition-all duration-500 ${colorLevel === 0 ? "bg-blue-500" :
                                        colorLevel === 1 ? "bg-yellow-500" :
                                            colorLevel === 2 ? "bg-green-500" :
                                                colorLevel === 3 ? "bg-purple-500" :
                                                    "bg-pink-500"
                                        }`}
                                    style={{ width: `${((10 - pointsToNextColor) / 10) * 100}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>



                {/* 色の説明 */}
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                    <div className="flex items-center gap-1">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-white to-gray-100"></div>
                        <span className="text-xs text-gray-600">ホワイト (0-9pt)</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-50 to-blue-100"></div>
                        <span className="text-xs text-gray-600">ブルー (10-19pt)</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-yellow-50 to-yellow-100"></div>
                        <span className="text-xs text-gray-600">イエロー (20-29pt)</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-50 to-green-100"></div>
                        <span className="text-xs text-gray-600">グリーン (30-39pt)</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-50 to-purple-100"></div>
                        <span className="text-xs text-gray-600">パープル (40pt~)</span>
                    </div>
                </div>

            </main>
        </div>)
}
