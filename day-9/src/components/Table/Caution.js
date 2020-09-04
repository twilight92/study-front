import React from "react";

export default function checkInventory({inventory}) {
  if (!inventory) return <p className="caution">품절</p>
  if (inventory <= 3) return <p className="caution">품절임박 {inventory}개 잔여</p>
}
