import { redirect } from 'next/navigation'
import { createClient } from '../../../../utils/supabase-auth/server'
import { NextResponse } from 'next/server'
// The client you created from the Server-Side Auth instructions


export async function GET(request: Request) {
    const { searchParams, origin } = new URL(request.url)
    const code = searchParams.get('code')
    const next = searchParams.get('next') ?? '/'

    if (code) {
        const supabase = await createClient()
        const { error } = await supabase.auth.exchangeCodeForSession(code)
        if (!error) {
            const user = await supabase.auth.getUser()
            const { data: existingUser } = await supabase
            .from("users")
            .select("id")
            .eq("id", user.data.user?.id)
            .single()
        
        if (!existingUser) {
            const userData = await supabase.from("users").insert({
                id: user.data.user?.id,
                username: user.data.user?.user_metadata.full_name,
                role: "user",
                points: 0,
                created_at: new Date()
            })
        
            if (userData.error) {
                console.log(userData.error.message)
                redirect("/error")
            }
        }
            const forwardedHost = request.headers.get('x-forwarded-host') // original origin before load balancer
            const isLocalEnv = process.env.NODE_ENV === 'development'
            if (isLocalEnv) {
                // we can be sure that there is no load balancer in between, so no need to watch for X-Forwarded-Host
                return NextResponse.redirect(`${origin}${next}`)
            } else if (forwardedHost) {
                return NextResponse.redirect(`https://${forwardedHost}${next}`)
            } else {
                return NextResponse.redirect(`${origin}${next}`)
            }
        }
    }

    // return the user to an error page with instructions
    return NextResponse.redirect(`${origin}/auth/auth-code-error`)
}