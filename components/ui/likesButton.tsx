"use client";

import { insertLike } from "@/utils/actions/insertLikes";
import { useState } from "react";

type LikesButtonProps = {
  user_id: string;
  tip_id: string;
  likes: number;
  hasLiked: boolean;
};

export default function LikesButton({
  user_id,
  tip_id,
  likes,
  hasLiked,
}: LikesButtonProps) {
  const [likeCount, setLikeCount] = useState(likes);
  const [liked, setLiked] = useState(hasLiked);

  const handleLike = async () => {
    if (liked) return;
    await insertLike(user_id, tip_id);
    setLiked(true);
    setLikeCount(likeCount + 1);
  };

  return (
    <button
      onClick={handleLike}
      disabled={liked}
      className={`btn ${
        liked
          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
          : "bg-white text-pink-600 hover:bg-pink-600 hover:text-white"
      }`}
    >
      {liked ? `いいね済み ${likeCount}` : `いいねする ${likeCount}`}
    </button>
  );
}
