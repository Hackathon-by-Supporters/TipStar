// // 削除のServer action。/my-tipsページのファイル（app/my-tips/page.tsx）からここのdeleteTips関数を呼び出してTips削除。

// "use server";
// import { createClient } from "@/utils/supabase-auth/server";

// // Tipsの削除
// export const deleteTips = async (formData: FormData) => {

//     // ユーザー取得
//     const supabase = await createClient();
//     const { data: { user } } = await supabase.auth.getUser();

//     // ユーザー認証→ユーザーが存在しない場合はエラー
//     if (!user) return { success: false, error: "Unauthorized" };

//     /*
    
    
//         ここに削除処理（仮）
//         usersテーブルのidをuser-idとして渡す
//         tipsテーブルのidを渡す
    
//     */

//     return { success: true };
// };


"use server";
import { createClient } from "@/utils/supabase-auth/server";

// Tipsの削除
export const deleteTip = async (formData: FormData) => {
    // ユーザー取得
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    // ユーザーがいないときはNG
    if (!user) return { success: false, error: "Unauthorized" };

    // formDataから削除対象のtips.idを取得
    const tipId = formData.get("tip_id") as string;

    // tipIdがない場合はエラー
    if (!tipId) {
        return { success: false, error: "Tip IDがありません" };
    }

    // 削除処理
    const { error } = await supabase
        .from("tips")
        .delete()
        .eq("id", tipId)
        .eq("user_id", user.id); // 自分の投稿だけ削除できるように保護

    if (error) {
        return { success: false, error: error.message };
    }

    return { success: true };
};
