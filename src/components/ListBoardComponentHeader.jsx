import { addToFavorite, getWorkSpaceById } from "@/app/services/workspace.service";
import Image from "next/image";
import React from "react";
import FavoriteButton from "./FavoriteButtonComponent";

export default async function ListBoardComponentHeader({ name, id }) {
  const workspaceData = await getWorkSpaceById(id);
  return (
    <>
      <div className="text-gray flex text-lg gap-3 mb-5">
        <p>{name}</p> / <p>{workspaceData.data?.workspaceName}</p> / <p>List</p>
      </div>
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">HRD Design</h2>
        <FavoriteButton id={id} data={workspaceData}/>
      </div>
    </>
  );
}
