import { getAllTips } from "@/utils/queries/getTips";
import InsertTipsModal from "@/components/ui/insertTipsModal";
import InsertTipButton from "@/components/ui/insertTipButton";
import InsertTipButtonAlways from "@/components/ui/insertTipButtonAlways";
import TipsList from "@/components/ui/TipsList";

import { DotGothic16 } from "next/font/google";

const dotGothic16 = DotGothic16({
  weight: "400", // DotGothic16 は 400 のみです
  subsets: ["latin"],
  display: "swap", // 推奨設定
});
export default async function Home() {
  // これが正しくSSRできてるのかは怪しいw
  const { data } = await getAllTips();

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 relative">
      <InsertTipButtonAlways />

      <div className="container mx-auto px-4 p-10">
        <header className="mb-8 text-center">
          <h1
            className={`text-4xl font-bold text-purple-600 mb-8 ${dotGothic16.className}`}
          >
            Tip<span className="text-pink-500">Star</span>
          </h1>
          <p className="text-xl font-bold text-gray-600">
            大学生活のヒントを共有しよう！
          </p>
        </header>

        <InsertTipButton />
        <div className="p-4 space-y-4">
          {data && <TipsList tips={data} />}
          <InsertTipsModal />
        </div>
      </div>
    </main>
  );
}
