import ListBoardComponentHeader from "@/components/ListBoardComponentHeader";
import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";
import TaskComponent from "@/components/TaskComponent";
import MonthlyStatisticsComponent from "@/components/MonthlyStatisticsComponent";
import Image from "next/image";
import { getAllWorkSpace } from "@/app/services/workspace.service";
async function ToDoListById({params}) {
  const workspaceData = await getAllWorkSpace();
  return (
    <>
      <div className="flex w-full h-full">
        <div className="w-[25%] h-full">
          <SidebarComponent data={workspaceData.data} link={"/todo-list"} details={"workspace"}/>
        </div>
        <div className="w-[75%] h-full pl-5">
          <NavbarComponent />
          <div className="w-full flex justify-between">
            <div className="p-5 w-[60%]">
              <ListBoardComponentHeader name={"Workspace"} id={params.id}/>
              <TaskComponent data={params.id} />
            </div>
            <div className="w-[35%]">
              <MonthlyStatisticsComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ToDoListById;
