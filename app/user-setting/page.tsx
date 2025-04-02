"use client";

import { motion } from "motion/react";

export default function UserSetting() {
    return (
        <motion.button className="btn btn-xl btn-primary" animate={{ rotate: 360 }}>
            ユーザー設定
        </motion.button>
    );
}
