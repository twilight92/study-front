import React from "react";

export default function checkInventory({inventory}) {
console.log(inventory)
  if (!inventory) return <p class="caution">품절</p>
  if (inventory <= 3) return <p class="caution">품절임박 {inventory}개 잔여</p>
}
