"use client";

import { motion } from "motion/react";

export default function Profile() {
    return (
        <motion.button className="btn btn-xl btn-primary" animate={{ rotate: 360 }}>
            プロフィール
        </motion.button>
    );
}
