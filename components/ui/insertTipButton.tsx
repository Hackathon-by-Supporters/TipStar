"use client"

import { motion } from "framer-motion";

const MotionLabel = motion.label;

export default function InsertTipButton() {
    return (
        <div className="mb-8 flex justify-center">
            <motion.label
                htmlFor="post-modal"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn rounded-full px-6 py-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-md cursor-pointer"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="w-5 h-5"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
                Tipを投稿
            </motion.label>
        </div>
    )
}
