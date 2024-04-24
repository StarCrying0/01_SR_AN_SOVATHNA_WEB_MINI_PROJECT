import ListBoardComponentHeader from "@/components/ListBoardComponentHeader";
import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";
import TaskComponent from "@/components/TaskComponent";
import MonthlyStatisticsComponent from "@/components/MonthlyStatisticsComponent";
import Image from "next/image";
import { getAllWorkSpace } from "../services/workspace.service";
async function ToDoList() {
  const workspaceData = await getAllWorkSpace();
  return (
    <>
      <div className="flex w-full h-full">
        <div className="w-[25%] h-full">
          <SidebarComponent data={workspaceData.data} link={"/todo-list"} details={"workspace"}/>
        </div>
        <div className="w-[75%] h-full pl-5">
          <NavbarComponent />
          <div className="flex justify-center mt-40">
            <img
              src="https://sofontsy.com/cdn/shop/products/welcome-cutting-file-for-farmhouse-sign-welcome-sign-greeting-sign-svg-dxf-and-more-glowforge-laser-ready-svg-diva-watts-designs-306122_1024x.jpg?v=1617077597"
              className="w-[50%]"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}
export default ToDoList;
