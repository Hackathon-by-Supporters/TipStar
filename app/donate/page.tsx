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
    <main className="min-h-screen bg-white">
      {/* ヒーロー */}
      <section className="py-4 md:py-10 max-w-4xl mx-auto text-center px-4">
        <div className="inline-block bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
          韓国留学Tips開発チーム
        </div>
        <h2 className="text-4xl md:text-4xl font-bold text-purple-800 mb-2">
          あなたの応援が私たちの原動力です
        </h2>
      </section>

      {/* フォーム */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-40 flex items-center justify-center">
          <DonationForm />
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-purple-100 py-8 border-t border-purple-200 text-center text-purple-700 text-sm">
        <p>© 2025 韓国留学Tips 開発チーム</p>
        <p className="mt-2">あなたの応援が、より良いサービスを生み出します。</p>
      </footer>
    </main>
  );
}
