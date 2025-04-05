"use server";
import { createClient } from "@/utils/supabase-auth/server";

export const hasUserLiked = async (user_id: string, tip_id: string) => {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("likes")
    .select("id")
    .eq("user_id", user_id)
    .eq("tip_id", tip_id)
    .limit(1)
    .single();

  return !!data && !error;
};
