import { Authentication } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export const getAllTaskByWorkspaceId = async (workspaceId) => {
  const session = await getServerSession(Authentication);
  try {
    const res = await fetch(
      `http://110.74.194.123:8989/api/todo/v1/tasks?workspaceId=${workspaceId}`,
      {
        cache: "no-store",
        headers: {
          authorization: `Bearer ${session?.user?.token}`,
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const changeTaskStatus = async (id, updateStatus) => {
  try {
    const session = await getServerSession(Authentication);
    const res = await fetch(
      `http://110.74.194.123:8989/api/todo/v1/tasks/change-status/${id}`,
      {
        method: "PUT",
        next: { tags: ["task"] },
        headers: {
          authorization: `Bearer ${session?.user?.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateStatus),
      }
    );
    const data = await res.json();
  } catch (error) {
    console.log(error);
  }
};

export const deleteTaskByWorkspaceId = async(id,workId) =>{
  const session = await getServerSession(Authentication);
  try {
    const res = await fetch(  
      `http://110.74.194.123:8989/api/todo/v1/tasks/deleteTaskByWorkspaceIdAndTaskId/${workId}/${id}`,
      {
        method: "DELETE",
        next: { tags: ["task"] },
        headers: {
          authorization: `Bearer ${session?.user?.token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
  } catch (error) {
    console.log(error);
  }
}