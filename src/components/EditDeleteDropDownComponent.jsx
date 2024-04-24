"use client";

import { deleteTask, deleteWorkspace } from "@/app/action/addnew";
import Image from "next/image";
import React from "react";

export default function EditDeleteDropDownComponent({ id,workId,details }) {
  return (
    <details className="dropdown">
      <summary className=" btn bg-white shadow-none border-0 p-0 h-0 min-h-0">
        <Image
          src={"/assets/icons/tabler_dots.svg"}
          width={20}
          height={20}
          alt={"edit delete card"}
        />
      </summary>
      <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
        <li>
          <button>Edit</button>
        </li>
        <li>
          <button onClick={()=>{
            details!=="deleteTask"?
            deleteWorkspace(id):deleteTask(id,workId)
            }}>Delete</button>
        </li>
      </ul>
    </details>
  );
}
