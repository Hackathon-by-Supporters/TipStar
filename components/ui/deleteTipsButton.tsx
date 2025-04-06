"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { deleteTip } from "@/utils/actions/deleteTip";

type Props = {
  tipId: number;
};

export default function DeleteTipsButton({ tipId }: Props) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleDelete = () => {
    const formData = new FormData();
    formData.append("tip_id", String(tipId));

    startTransition(async () => {
      const result = await deleteTip(formData);

      if (result.success) {
        router.refresh(); // 削除後に再読み込みして一覧を更新！
      } else {
        alert("削除に失敗しました: " + result.error);
      }
    });
  };

  return (
    <button
      onClick={handleDelete}
      disabled={isPending}
      className="text-sm text-red-500 hover:underline cursor-pointer"
    >
      {isPending ? "削除中" : "削除"}
    </button>
  );
}
