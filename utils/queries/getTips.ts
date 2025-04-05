import { supabase } from "../supabase"

// 全Tipsを取得(tsで型の指定してないからちょっと不便かも)
export const getAllTips = async () => await supabase
        .from("tips")
        .select("*")
        .order("created_at", { ascending: false }); // 最新順に並び替え