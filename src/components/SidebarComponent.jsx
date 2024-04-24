import Image from "next/image";
import React from "react";
import EditDeleteDropDownComponent from "./EditDeleteDropDownComponent";
import WorkspacePopupComponent from "./WorkspacePopupComponent";
import Link from "next/link";

export default function SidebarComponent({ data,link,details }) {

  const favoriteWorkspaces = data.filter(workSpace => workSpace.isFavorite);
  return (
    <div className="pl-10 mt-6 h-full">
      <div className="flex justify-between">
        <Image src={"/assets/icons/logo.svg"} width={150} height={100} />
        <Image src={"/assets/icons/arrow.svg"} width={25} height={30} />
      </div>

      {/* workspace */}
      <div className="flex justify-between mt-10">
        <h1 className="uppercase text-gray font-bold">workspace</h1>
        <WorkspacePopupComponent />
      </div>

      {/* each workspace */}
      {data.map((workSpace) => (
        <div className="flex items-center mt-5 w-full" key={workSpace.workSpaceId}>
          <div className="rounded-full w-4 h-4 bg-todo"></div>
          <div className="flex justify-between w-full pl-3">
            <Link href={`${link}/${workSpace.workSpaceId}`}>{workSpace.workspaceName}</Link>
            <EditDeleteDropDownComponent id={workSpace.workSpaceId} details={details}/>
          </div>
        </div>
      ))}

      {/* favorite*/}
      <div className="flex justify-between mt-10">
        <h1 className="uppercase text-gray font-bold">favorite</h1>

        <Image src={"/assets/icons/favorite.svg"} width={22} height={22} />
      </div>
      {/* each favorite workspace */}
      {favoriteWorkspaces.map((workSpace) => (
        <div className="flex items-center mt-5 w-full" key={workSpace.workSpaceId}>
          <div className="rounded-full w-4 h-4 bg-workingOn"></div>
          <div className="flex justify-between w-full pl-3">
          <Link href={`${link}/${workSpace.workSpaceId}`}>{workSpace.workspaceName}</Link>
          </div>
        </div>
      ))}
    </div>
  );
}
