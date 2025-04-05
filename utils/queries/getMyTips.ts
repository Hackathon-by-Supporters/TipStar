// ログイン中のユーザーが投稿したTipsのみ取得する関数をここで定義

import { createClient } from "@/utils/supabase-auth/server";

export const getMyTips = async () => {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        return []; // ログインしてなかったら空配列返す
    }

    const { data, error } = await supabase
        .from("tips")
        .select("*")
        .eq("user_id", user.id) // 自分の投稿だけ
        .order("created_at", { ascending: false }); // 最新順に並び替え（お好みで）

    if (error) {
        console.error("取得エラー:", error.message);
        return [];
    }

    return data;
};
