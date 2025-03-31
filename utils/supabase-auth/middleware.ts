// lib/supabase-auth/middleware.ts

import { CookieOptions, createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";


// 1. クッキー情報からUserデータを取得する
// 2. 未ログインの場合（Userデータが存在しない場合）
export async function updateSession(request: NextRequest) {
    const response = NextResponse.next()

    // ---------------------------------------------
    // Userデータを取得
    // ---------------------------------------------
    // クライアントを作成
    const supabase = createServerClient(
        process.env.SUPABASE_URL!,
        process.env.SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll()
                },
                setAll(cookies) {
                    cookies.forEach((cookie) => {
                        response.cookies.set(cookie)
                    })
                },
            },
        }
    )
    // ユーザーを取得
    const { data: { user } } = await supabase.auth.getUser()

    const pathname = request.nextUrl.pathname
    response.headers.set('x-current-path', pathname)
    // 重要: createServerClient と supabase.auth.getUser() の間にロジックを
    // 書かないでください。単純なミスでも、ユーザーがランダムにログアウトされる
    // 問題のデバッグが非常に困難になる可能性があります。

    // ---------------------------------------------
    // 未ログインユーザーの場合: リダイレクト処理
    // ---------------------------------------------
    if (
        !user &&
        !pathname.startsWith('/private') &&
        !pathname.startsWith('/auth')
    ) {
        const url = request.nextUrl.clone()
        url.pathname = '/login'
        return NextResponse.redirect(url)
    }

    // ---------------------------------------------
    // ログインユーザーの場合: レスポンスを返す
    // ---------------------------------------------
    return response;
}