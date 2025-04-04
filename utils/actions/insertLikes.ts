// いいねのServer action。/ホームページのファイル（app/page.tsx）上のTipsListコンポーネント(components/ui/TipList.tsx)からここのinsertLikes関数を呼び出していいね情報をlikesテーブルにinsert。

"use server";
import { createClient } from "@/utils/supabase-auth/server";

// いいね情報をinsert
export const insertLike = async (user_id: string,tip_id:string) => {

    // ユーザー取得
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    // ユーザー認証→ユーザーが存在しない場合はエラー
    if (!user) return { success: false, error: "Unauthorized" };
    /*
        likesテーブルへの挿入時に渡すべきデータ
        →usersテーブルのidをlikesテーブルのuser_idに挿入
        →tipsテーブルのidをlikesテーブルのtip_idに挿入
    */
    await supabase.from("likes").insert({ user_id: user_id, tip_id: tip_id });
    return { success: true };
};