import { getAllTips } from "@/utils/queries/supabasefunctions";
import PostTipsModal from "@/components/ui/postTipsModal";

export default async function Home() {
  // これが正しくSSRできてるのかは怪しいw
  const { data } = await getAllTips();
  return (
    <div className="p-4 space-y-4">
      <ul>
        {data?.map((tip) => (
          <li key={tip.id}>{tip.title}: {tip.tip_text}</li>
        ))}
      </ul>

      <label htmlFor="post-modal" className="btn btn-outline btn-accent">
      投稿
      </label>
      <PostTipsModal />
    </div>
  );
}
