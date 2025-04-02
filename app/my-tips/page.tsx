"use client";

import { motion } from "motion/react";

export default function Mytips() {
    return (
        <motion.button className="btn btn-xl btn-primary" animate={{ rotate: 360 }}>
            マイTips
        </motion.button>
    );
}
