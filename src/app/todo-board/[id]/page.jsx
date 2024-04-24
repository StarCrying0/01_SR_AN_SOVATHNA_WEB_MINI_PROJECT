import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";
import Image from "next/image";
import BoardComponent from "@/components/BoardComponent";
import ListBoardComponentHeader from "@/components/ListBoardComponentHeader";
import { getAllWorkSpace } from "@/app/services/workspace.service";
async function Task({params}) {
  const workspaceData = await getAllWorkSpace();
  return (
    <>
      <div className="flex w-full h-full">
        <div className="w-[25%] h-full">
          <SidebarComponent data={workspaceData.data} link={"/todo-board"} details={"deleteFromBoard"}/>
        </div>
        <div className="w-[75%] h-full pl-5">
          <NavbarComponent />
          <div className="p-5">
            {/* <img
              src="https://sofontsy.com/cdn/shop/products/welcome-cutting-file-for-farmhouse-sign-welcome-sign-greeting-sign-svg-dxf-and-more-glowforge-laser-ready-svg-diva-watts-designs-306122_1024x.jpg?v=1617077597"
              className="w-[50%]"
            ></img> */}
            <ListBoardComponentHeader name={"Board"} id={params.id}/>
            <BoardComponent id={params.id}/>
          </div>
        </div>
      </div>
    </>
  );
}
export default Task;
