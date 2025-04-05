"use client";

import { useState } from "react";
import { insertLike } from "@/utils/actions/insertLikes";

type LikesButtonProps = {
  user_id: string;
  tip_id: string;
  likes: number;
};

export default function LikesButton({
  user_id,
  tip_id,
  likes,
}: LikesButtonProps) {
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = async () => {
    await insertLike(user_id, tip_id);
    setLikeCount(likeCount + 1);
  };

  return (
    <button className="btn" onClick={handleLike}>
      いいね！{likeCount}
    </button>
  );
}
