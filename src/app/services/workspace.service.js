import { Authentication } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { revalidateTag } from "next/cache";

export const getAllWorkSpace = async () => {
  const session = await getServerSession(Authentication);
  try {
    const res = await fetch(
      "http://110.74.194.123:8989/api/todo/v1/workspaces",
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

export const addNewWorkSpace = async (newWorkSpace) => {
  const session = await getServerSession(Authentication);
  try {
    const res = await fetch(
      "http://110.74.194.123:8989/api/todo/v1/workspaces",
      {
        method: "POST",
        headers: {
          authorization: `Bearer ${session?.user?.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newWorkSpace),
      }
    );
    const data = await res.json();
  } catch (error) {
    console.log(error);
  }
};

export const deleteWorkSpace = async (id) => {
  const session = await getServerSession(Authentication);
  try {
    const res = await fetch(
      `http://110.74.194.123:8989/api/todo/v1/workspaces/${id}`,
      {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${session?.user?.token}`,
          "Content-Type": "application/json",
        }
      }
    );
    const data = await res.json();
  } catch (error) {
    console.log(error);
  }
}
