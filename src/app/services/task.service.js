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
