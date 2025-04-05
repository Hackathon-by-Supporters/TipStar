"use server";

import { createClient } from "@/utils/supabase-auth/server";

export const getUserProfile = async () => {
    const supabase = await createClient();
    const {
        data: { user },
        error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
        console.error("🔐 ユーザー認証エラー:", authError?.message);
        return { success: false, error: "Unauthorized" };
    }

    const { data, error: profileError } = await supabase
        .from("users")
        .select("username, points")
        .eq("id", user.id)
        .single();

    if (profileError || !data) {
        console.error("📄 プロフィール取得エラー:", profileError?.message);
        return { success: false, error: "プロフィールが取得できませんでした" };
    }

    return {
        success: true,
        profile: {
            username: data.username,
            points: data.points,
        },
    };
};
