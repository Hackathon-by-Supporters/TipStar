"use client";

import { useState, useEffect } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
import { postTip } from "@/utils/actions/postTip";

type Category = {
    id: number;
    category_name: string;
};

export default function PostTipsModal() {
    const [title, setTitle] = useState("");
    const [tipText, setTipText] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(false);

    // カテゴリー取得
    useEffect(() => {
        (async () => {
            const res = await fetch("/api/categories"); // app/api/categoriesでGET操作
            const data = await res.json();
            setCategories(data ?? []);
        })();
    }, []);

    // 投稿の処理
    const handleSubmit = async () => {
        setLoading(true);

        // 入力フォームから値を取得して、FormDataに格納
        const formData = new FormData();
        formData.append("title", title);
        formData.append("tip_text", tipText);
        formData.append("category_id", categoryId);

        // utils/actions/postTip.tsのpostTip関数を呼び出す（Server action）
        const result = await postTip(formData); 
        setLoading(false);

        // 投稿成功時の処理
        if (result.success) {
            toast.success("投稿成功！");
            setTitle("");
            setTipText("");
            setCategoryId("");
            const closeBtn = document.getElementById("post-modal") as HTMLInputElement;
            if (closeBtn) closeBtn.checked = false;
        } else {
            toast.error(result.error || "投稿に失敗しました");
        }
    };

    // UIはてきとうです
    return (
        <>
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar />

            <input type="checkbox" id="post-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box space-y-4">
                    <h3 className="font-bold text-lg">Tips投稿</h3>

                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="タイトル"
                        className="input input-bordered w-full"
                    />

                    <textarea
                        value={tipText}
                        onChange={(e) => setTipText(e.target.value)}
                        placeholder="内容（任意）"
                        className="textarea textarea-bordered w-full"
                    />

                    <select
                        value={categoryId}
                        onChange={(e) => setCategoryId(e.target.value)}
                        className="select select-bordered w-full"
                    >
                        <option value="">カテゴリを選択</option>
                        {categories.map((cat) => (
                            <option key={cat.id} value={cat.id}>
                                {cat.category_name}
                            </option>
                        ))}
                    </select>

                    <div className="modal-action">
                        <label htmlFor="post-modal" id="modal-close" className="btn">
                            閉じる
                        </label>
                        <button className="btn btn-primary" onClick={handleSubmit} disabled={loading}>
                            {loading ? "投稿中..." : "投稿"}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}