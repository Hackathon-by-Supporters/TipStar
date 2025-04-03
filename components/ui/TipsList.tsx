// components/ui/TipsList.tsx

type Tip = {
    id: string;
    title: string;
    tip_text: string;
};

type Props = {
    tips: Tip[];
};

export default function TipsList({ tips }: Props) {
    return (
        <ul className="space-y-6">
            {tips.map((tip) => (
                    <li key={tip.id} className="p-4 bg-white shadow rounded-lg border border-purple-100">
                        <h3 className="font-semibold text-purple-700">{tip.title}</h3>
                        <p className="text-gray-700">{tip.tip_text}</p>
                    </li>
            ))}
        </ul>
    );
}
