"use server"

import { revalidateTag } from "next/cache";
import {
  addNewWorkSpace,
  addToFavorite,
  deleteWorkSpace,
} from "../services/workspace.service";
import { deleteTaskByWorkspaceId } from "../services/task.service";

export async function addWorkspace(data) {
  const workSpace = {
    workspaceName: data.get("workspaceName"),
  };
  await addNewWorkSpace(workSpace);
  revalidateTag("workspace");
}

export async function deleteWorkspace(id) {
  await deleteWorkSpace(id);
  revalidateTag("workspace");
}

export async function deleteTask(id,workId) {
  await deleteTaskByWorkspaceId(id,workId);
  revalidateTag("task");
}

export async function addFavoriteWorkSpace(id,favorite) {
  await addToFavorite(id,favorite)
  revalidateTag("workspace");
}