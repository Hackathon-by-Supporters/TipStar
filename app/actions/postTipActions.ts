'use server'

import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function insertTip({
    title,
    text,
    categoryId,
}: {
    title: string
    text?: string
    categoryId: string
}) {
    const cookieStore = await cookies();

    const supabase = createServerClient(
        process.env.SUPABASE_URL!,
        process.env.SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll: async () => cookieStore.getAll(),
            }
        }
    )

    const {
        data: { user },
        error: authError,
    } = await supabase.auth.getUser()

    if (!user) throw new Error("Unauthenticated")

    const { error } = await supabase.from('tips').insert({
        title,
        text,
        category_id: categoryId,
        user_id: user.id,
    })

    if (error) throw new Error(error.message)
}
