"use client";

import { motion } from "motion/react";

export default function Donate() {
    return (
        <motion.button className="btn btn-xl btn-primary" animate={{ rotate: 360 }}>
            なげせん
        </motion.button>
    );
}
