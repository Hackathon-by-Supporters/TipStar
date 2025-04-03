"use server";
import { createClient } from "@/utils/supabase-auth/server";

// Tipsの追加
export const insertTip = async (formData: FormData) => {

    // ユーザー取得
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    // ユーザー認証→ユーザーが存在しない場合はエラー
    if (!user) return { success: false, error: "Unauthorized" };

    // insertTipsModal（insertTipsModal.tsx）のhandleSubmit関数でinsertTipの引数に渡されたformDataを取得
    const title = formData.get("title") as string;
    const tipText = formData.get("tip_text") as string | null;
    const categoryId = formData.get("category_id") as string

    // titleとcategoryIdが空の場合はエラー
    if (!title || !categoryId) {
        return { success: false, error: "タイトルとカテゴリは必須です" };
    }

    // titleとcategoryIdが空じゃないなら、tipsテーブルに受け取ったデータを挿入
    const { error } = await supabase.from("tips").insert({
        title,
        tip_text: tipText || null,
        category_id: Number(categoryId),
        user_id: user.id,
    });

    if (error) return { success: false, error: error.message };

    return { success: true };
};