"use client";

export default function DonationForm() {
  return (
    <div className="relative left-1/2 p-4 bg-purple-50 rounded-lg text-sm space-y-3 border border-purple-100">
      <div className="font-medium text-purple-800">
        口座送金情報（계좌이체）
      </div>

      <div className="grid grid-cols-3 gap-1">
        <div className="text-purple-600">銀行名:</div>
        <div className="col-span-2 text-gray-700">국민은행 (国民銀行)</div>

        <div className="text-purple-600">口座番号:</div>
        <div className="col-span-2 text-gray-700">484601-04-141654</div>

        <div className="text-purple-600">口座名義:</div>
        <div className="col-span-2 text-gray-700">TipStar</div>
      </div>

      <div className="text-xs text-purple-700 mt-2 bg-purple-100/50 p-2 rounded border border-purple-200">
        <p className="font-medium mb-1">送金方法：</p>
        <ol className="list-decimal list-inside space-y-1">
          <li>お使いの銀行アプリで上記口座に送金してください</li>
          <li>送金メモに「Tips支援」と入力してください</li>
          <li>送金後、下のメッセージ欄に送金完了の旨をお知らせください</li>
        </ol>
      </div>
    </div>
  );
}
