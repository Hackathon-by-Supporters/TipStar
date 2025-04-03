type Tip = {
    id: string;
    title: string;
    tip_text: string;
};

type Props = {
    tips: Tip[];
};

export default function TipsList({ tips }: Props) {

    // ここに「いいね」をSupabaseにinsertするための関数(insertLike（仮名）)を実行するための関数を定義
    return (
        <ul className="space-y-6">

            {tips.map((tip) => (
                <div className="card bg-base-100 overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="card-body">
                        <li key={tip.id} className="p-4 bg-white shadow rounded-lg border border-purple-100">
                            <h2 className="card-title font-semibold text-gray-700">{tip.title}</h2>
                            <p className="text-gray-700">{tip.tip_text}</p>
                            <div className="flex items-center pt-2 border-t border-gray-100">
                                <div className="justify-start card-actions">
                                    ここに良いねボタン
                                </div>
                            </div>
                        </li>
                    </div>
                </div>
            ))}
        </ul>
    );
}
