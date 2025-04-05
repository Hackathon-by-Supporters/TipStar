"use client";

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
  return (
    <>
      <button
        className="btn"
        onClick={async () => {
          await insertLike(user_id, tip_id);
        }}
      >
        いいね！{likes}
      </button>
    </>
  );
}
