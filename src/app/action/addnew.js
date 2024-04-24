
import { revalidateTag } from "next/cache";
import { addNewWorkSpace, deleteWorkSpace } from "../services/workspace.service";

export async function addWorkspace(data) {
  const workSpace = {
    workspaceName: data.get("workspaceName"),
  };
  revalidateTag(workSpace);
  await addNewWorkSpace(workSpace);
}

export async function deleteWorkspace(id){
  revalidateTag(id);
  await deleteWorkSpace(id);
}
