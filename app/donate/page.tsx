// export default function Mytips() {
//     return (
//         <main className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 flex justify-center items-center">
//             <div className="container text-center">
//                 投げ銭ページ
//             </div>
//         </main>
//     );
// }

import DonationForm from "@/components/ui/donation-form";

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      {/* ヒーローセクション */}
      <section className="py-12 md:py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
            韓国留学Tips開発チーム
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-10 text-purple-800">
            あなたの応援が私たちの原動力です
          </h1>
        </div>
      </section>

      {/* 投げ銭フォームと開発チーム紹介 */}
      <section id="donate" className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div>
              <DonationForm />
            </div>
            {/* { <div>
              <div className="sticky top-8">
                <h2 className="text-2xl font-bold mb-6 text-purple-800">開発チームの紹介</h2>
                <p className="text-purple-700 mb-6">
                  韓国留学Tipsサイトを作り上げた開発チームです。
                  それぞれが韓国留学の経験を持ち、留学生の役に立ちたいという思いで活動しています。
                </p>
              </div>
            </div> } */}
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-purple-100 py-8 border-t border-purple-200">
        <div className="container mx-auto px-4 text-center text-purple-700 text-sm">
          <p>© 2025 韓国留学Tips 開発チーム</p>
          <p className="mt-2">
            あなたの応援が、より良いサービスを生み出します。
          </p>
        </div>
      </footer>
    </main>
  );
}
