// // login/page.tsx

// "use client";

// import React from "react";
// import { signInWithGoogle, signOut } from "../../utils/supabase-auth/authGoogle";
// import { useRouter } from "next/navigation";


// export default function LoginPage() {

//     // Googleログイン
//     const handleGoogleLogin = async () => {
//         await signInWithGoogle();
//     }

//     // Googleログアウト
//     const router = useRouter();
//     const handleGoogleLogout = async () => {
//         const result = await signOut();
//         if (result) router.refresh();
//     }

//     return (
//         <div>
//             <button onClick={handleGoogleLogin}>ログイン</button>
//             <button onClick={handleGoogleLogout}>ログアウト</button>
//         </div>
//     )
// }

import { GoogleLoginButton } from "@/components/google-login-button"

export default function LoginPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 px-4 py-12 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div className="text-center">
                    <div className="flex justify-center">
                        <div className="h-20 w-20 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 flex items-center justify-center shadow-lg animate-bounce duration-1000">
                            <span className="text-3xl font-bold text-white">S</span>
                        </div>
                    </div>
                    <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600">
                        TipStar
                    </h1>
                    <p className="mt-3 text-lg text-indigo-600">🌍 留学生活をもっと楽しく、もっと便利に！</p>
                </div>

                <div className="mt-8 rounded-2xl border-2 border-indigo-200 bg-white p-8 shadow-lg shadow-indigo-100 hover:border-pink-200 transition-all duration-300">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-gray-900">ようこそ！</h2>
                        <p className="mt-2 text-sm text-gray-600">TipStarへログインして、留学生活を充実させましょう</p>
                    </div>

                    <GoogleLoginButton />

                    <div className="mt-8 text-center">
                        <div className="inline-block rounded-full bg-indigo-100 px-4 py-2 text-sm text-indigo-700">
                            🌍 留学生活の役立つヒントが待っています！
                        </div>
                    </div>
                </div>

                <div className="mt-6 text-center text-sm text-gray-600">
                    <p>© 2025 TipStar - 留学生のための最高のヒント集</p>
                </div>
            </div>
        </div>
    )
}

