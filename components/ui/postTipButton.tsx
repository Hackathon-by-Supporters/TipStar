"use client"

import { motion } from "framer-motion";

const MotionLabel = motion.label;

export default function PostTipButton() {
    return (
        <div className="mb-8 flex justify-center">
            <MotionLabel
                htmlFor="post-modal"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn rounded-full px-6 py-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-md cursor-pointer"
            >
                <span className="mr-2 inline-flex items-center justify-center h-5 w-5 bg-white text-purple-500 rounded-full">
                    +
                </span>
                Tipを投稿
            </MotionLabel>
        </div>
    )
}
