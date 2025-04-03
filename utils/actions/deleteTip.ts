// 削除のServer action。/my-tipsページのファイル（app/my-tips/page.tsx）からここのdeleteTips関数を呼び出してTips削除。

"use server";
import { createClient } from "@/utils/supabase-auth/server";

// Tipsの削除
export const deleteTips = async (formData: FormData) => {

    // ユーザー取得
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    // ユーザー認証→ユーザーが存在しない場合はエラー
    if (!user) return { success: false, error: "Unauthorized" };

    /*
    
    
        ここに削除処理（仮）
        usersテーブルのidをuser-idとして渡す
        tipsテーブルのidを渡す
    
    */

    return { success: true };
};