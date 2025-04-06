import DeleteTipsButton from "@/components/ui/deleteTipsButton";
import { getMyTips } from "@/utils/queries/getMyTips"; // 関数インポート

export default async function Mytips() {
  const tips = await getMyTips(); // 自分の投稿を取得！
  // const tips = []; // 自分の投稿を取得！

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 flex justify-center">
      <div className="container text-center space-y-4 mt-16">
        <h1 className="text-2xl font-bold text-gray-600 mb-16">投稿一覧</h1>

        {tips.length === 0 ? (
          <p>投稿がありません</p>
        ) : (
          tips.map((tip) => (
            <div
              key={tip.id}
              className="bg-white shadow-md rounded-xl p-4 text-left relative"
            >
              <h2 className="text-lg font-semibold text-gray-600 mb-2">
                {tip.title}
              </h2>
              <p className="text-gray-600 mb-2">{tip.tip_text}</p>

              {/* 削除ボタン */}
              <div className="absolute top-2 right-2">
                <DeleteTipsButton tipId={tip.id} />
              </div>
            </div>
          ))
        )}
      </div>
    </main>
  );
}
