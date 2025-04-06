
// export default function Mytips() {

//     /*
    
//     ok 1. util/queries/getMyTips.tsxに自分が投稿したTipsのみ一覧取得するgetMyTips関数（仮名）を定義し、その関数をここで呼び出して自分が投稿したTipsを一覧取得。

//     2. 「削除ボタンが押されたら、deleteTips関数を実行するための関数」をここで定義。この中でTips削除用関数（deleteTips（仮名））をここで呼び出して削除処理を実行。

//     3. deleteTips関数はutils/actions/delete.tsxで定義する（Server action）
//     */

//     return (
//         <main className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 flex justify-center items-center">
//             <div className="container text-center">

//                 {/*

//                     取得したTipsをmap関数で回してここに一覧表示し、各Tipsの横に削除ボタンを表示。
//                     削除ボタンが押されたら、deleteTips関数を実行するための関数を呼び出す。
//                     削除ボタンはcomponents/ui/DeleteTipsButton.tsx作って、コンポーネントとして切り出しても良き。

//                 */}

//                 Tips削除機能の画面
//             </div>
//         </main>
//     );
// }



import { getMyTips } from "@/utils/queries/getMyTips"; // 関数インポート

export default async function Mytips() {
    const tips = await getMyTips(); // 自分の投稿を取得！

    return (
        <main className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 flex justify-center items-center">
            <div className="container text-center space-y-4">
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

                            {/* ここに削除ボタンあとで追加するよ！ */}
                        </div>
                    ))
                )}
            </div>
        </main>
    );
}
