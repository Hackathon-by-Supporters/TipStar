import { supabase } from "../supabase"

// 全Tipsを取得(tsで型の指定してないからちょっと不便かも)
export const getAllTips = async () => await supabase.from("tips").select("*")

// TIpsの削除
// ...