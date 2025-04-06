import DonationForm from "@/components/ui/donation-form";

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-white flex flex-col justify-between">
      {/* ヒーロー */}
      <section className="bg-purple-200 py-10 text-center">
        <div className="inline-block bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm font-medium mb-8">
          韓国留学Tips開発チーム
        </div>
        <h2 className="text-4xl md:text-4xl font-bold text-purple-700 mb-2">
          あなたの応援が私たちの原動力です
        </h2>
      </section>

      {/* フォーム */}
      <section className="py-16 flex items-center justify-center">
        <div>
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
