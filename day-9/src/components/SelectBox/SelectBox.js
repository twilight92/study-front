import React from "react";

export default function SelectBox({inventory}) {
  return (
    <select defaultValue={1}>
          {
            [...Array(10).keys()].map((item, idx) => {
              const index = idx + 1;
              return <option value={index} disabled={index > inventory}>{index}</option>
            })
          }
        </select>
  )
}
