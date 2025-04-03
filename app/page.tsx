import { getAllTips } from "@/utils/queries/supabasefunctions";
import PostTipsModal from "@/components/ui/postTipsModal";
import PostTipButton from "@/components/ui/postTipButton";
import TipsList from "@/components/ui/TipsList";
export default async function Home() {

  // これが正しくSSRできてるのかは怪しいw
  const { data } = await getAllTips();


  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-purple-600 mb-2">
            Tip<span className="text-pink-500">Star</span>
          </h1>
          <p className="text-gray-600">大学生活のヒントを共有しよう！</p>
        </header>

        <PostTipButton />
        <div className="p-4 space-y-4">
        {data && <TipsList tips={data} />}
          <PostTipsModal />
        </div>
      </div>
    </main>
  )
}