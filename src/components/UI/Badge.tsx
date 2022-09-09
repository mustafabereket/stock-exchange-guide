import React from "react";
import { BadgeType } from "../../types.d";

function Badge({ title, data }: BadgeType) {
  if (!data) return null;
  return (
    <div className={"bg-sky-500 px-2 py-1 text-center rounded-2xl"}>
      <span className={"text-sm md:text-md "}>{title}</span>
      <span className={"text-sm md:text-lg "}>{data}</span>
    </div>
  );
}

export default Badge;
