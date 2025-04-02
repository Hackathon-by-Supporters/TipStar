import { getAllTips } from "@/utils/supabasefunctions";


export default async function Home() {
  // これが正しくSSRできてるのかは怪しいw
  const { data } = await getAllTips();
  return (
    <ul>
      {data?.map((tip) => (
        <li key={tip.id}>{tip.title}: {tip.tip_text}</li>
      ))}
    </ul>
  );
}
