import Link from "next/link";
import React from "react";

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  console.log("id", id);
  return (
    <div className="h-full pb-80">
      <div className="m-auto grid max-w-full px-12 py-12 lg:max-w-6xl lg:grid-cols-2 lg:gap-4">
        <div className="mb-2 mt-24 text-flg font-bold">
          <Link href="/">←Back to home</Link>
        </div>
      </div>
    </div>
  );
}
