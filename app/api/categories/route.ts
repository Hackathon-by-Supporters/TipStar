/*
postTipsModal.tsxはClientcomponentなので（use clientしてる）、そこでsupabaseのCRUD操作する関数呼び出すと
クライアント側にURLとANONキーが漏れちゃうらしい（？）ので、一旦APIフォルダ（サーバー側）を経由してからCRUD操作する。
Server ActionはGETメソッド非対応っぽい（？）ので、API経由にした
*/

import { NextResponse } from "next/server";
import { supabase } from "@/utils/supabase";

// 全categoriesを取得（Tips投稿時にカテゴリー選択できるようにする用）
export async function GET() {
    const { data, error } = await supabase
        .from("categories")
        .select("id, category_name")
        // .order("order_", { ascending: true }); //選択肢の順序制御したいなら使う

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
}
