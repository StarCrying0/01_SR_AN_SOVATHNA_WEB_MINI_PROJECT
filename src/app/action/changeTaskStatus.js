"use server"

import { signOut } from "next-auth/react";
import { changeTaskStatus } from "../services/task.service";
import { revalidateTag } from "next/cache";

export async function changeStatus(id, statusNum) {
    if (statusNum === 1) {
      statusNum = 2;
    } else if (statusNum === 2) {
      statusNum = 3;
    } else if (statusNum === 3) {
      statusNum = 4;
    } else {
      statusNum = 4;
    }
    const updateStatus = {
      "status": statusNum,
    };

  await changeTaskStatus(id, updateStatus);
  revalidateTag("task")
}
