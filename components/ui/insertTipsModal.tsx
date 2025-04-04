"use client";

import { useState, useEffect, useRef } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
import { insertTip } from "@/utils/actions/insertTip";

type Category = {
    id: number;
    category_name: string;
};

export default function InsertTipsModal() {
    const [title, setTitle] = useState("");
    const [tipText, setTipText] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(false);

    const modalRef = useRef<HTMLDivElement | null>(null);

    // カテゴリー取得
    useEffect(() => {
        (async () => {
            const res = await fetch("/api/categories"); // app/api/categoriesでGET操作
            const data = await res.json();
            setCategories(data ?? []);
        })();
    }, []);

    useEffect(() => {
        const checkbox = document.getElementById("post-modal") as HTMLInputElement;

        const setBodyPadding = () => {
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            document.body.style.paddingRight = `${scrollbarWidth}px`;
            document.body.style.overflow = "hidden";
        };

        const resetBodyStyle = () => {
            document.body.style.paddingRight = "";
            document.body.style.overflow = "";
        };

        const observer = new MutationObserver(() => {
            if (checkbox?.checked) {
                setBodyPadding();
            } else {
                resetBodyStyle();
            }
        });

        if (checkbox) {
            observer.observe(checkbox, { attributes: true, attributeFilter: ["checked"] });
        }

        return () => {
            observer.disconnect();
            resetBodyStyle();
        };
    }, []);


    // escキーでモーダルウィンドウ閉じる
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                const checkbox = document.getElementById("post-modal") as HTMLInputElement;
                if (checkbox) checkbox.checked = false;
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    // 投稿の処理
    const handleSubmit = async () => {
        setLoading(true);

        // 入力フォームから値を取得して、FormDataに格納
        const formData = new FormData();
        formData.append("title", String(title));
        formData.append("tip_text", String(tipText));
        formData.append("category_id", String(categoryId));

        // utils/actions/insertTip.tsのinsertTip関数を呼び出す（Server action）
        const result = await insertTip(formData);
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

    // Enterキーおして投稿する
    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
        }
    };

    // モーダルウィンドウの背景押してモーダルウィンドウ閉じる
    const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === modalRef.current) {
            const checkbox = document.getElementById("post-modal") as HTMLInputElement;
            if (checkbox) checkbox.checked = false;
        }
    };


    // UIはてきとうです
    return (
        <>
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar />

            <input type="checkbox" id="post-modal" className="modal-toggle" />
            <div
                className="modal"
                ref={modalRef}
                onClick={handleBackgroundClick}
            >
                <div
                    className="modal-box space-y-4"
                    onKeyDown={handleKeyDown}
                >
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
                        <button
                            className="btn btn-primary"
                            onClick={handleSubmit}
                            disabled={loading}
                        >
                            {loading ? "投稿中..." : "投稿"}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}