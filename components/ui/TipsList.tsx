import LikesButton from "./likesButton";
import { hasUserLiked } from "@/utils/actions/hasUserLiked";

type Tip = {
  id: string;
  user_id: string;
  title: string;
  tip_text: string;
  likes: number;
};

type Props = {
  tips: Tip[];
};

export default async function TipsList({ tips }: Props) {
  const tipsWithLikedStatus = await Promise.all(
    tips.map(async (tip) => {
      const hasLiked = await hasUserLiked(tip.user_id, tip.id);
      return { ...tip, hasLiked };
    })
  );

  return (
    <ul className="flex flex-wrap gap-10 justify-center">
      {tipsWithLikedStatus.map((tip) => (
        <div
          className="card bg-base-100 overflow-hidden border-2 border-gray-200 hover:shadow-lg transition-shadow w-1/4 rounded-2xl"
          key={tip.id}
        >
          <div className="card-body">
            <li className="p-2">
              <h2 className="card-title font-semibold text-gray-700">
                {tip.title}
              </h2>
              <p className="text-gray-700">{tip.tip_text}</p>
              <div className="flex items-center pt-2 border-t border-gray-100">
                <div className="justify-start card-actions">
                  <LikesButton
                    user_id={tip.user_id}
                    tip_id={tip.id}
                    likes={tip.likes}
                    hasLiked={tip.hasLiked}
                  />
                </div>
              </div>
            </li>
          </div>
        </div>
      ))}
    </ul>
  );
}
