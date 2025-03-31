"use client";

import { motion } from "motion/react";

export default function Home() {
  return (
    <motion.button className="btn btn-xl btn-primary" animate={{ rotate: 360 }}>
      daisyUIのボタンが使えてるか確認
    </motion.button>
  );
}
