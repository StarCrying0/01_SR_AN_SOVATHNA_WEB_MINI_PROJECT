import { getAllTaskByWorkspaceId } from "@/app/services/task.service";
import TodoCardComponent from "./TodoCardComponent";

export default async function BoardComponent({ id }) {
  const taskData = await getAllTaskByWorkspaceId(id);
  return (
    <>
      <div className="mt-5 flex flex-auto gap-4 w-full">
        <div className="w-[25%]">
          <p className="w-full grid items-center after:border-t-2 after:h-[2px] after:block after:w-full after:border-yellow-400">
            TODO
          </p>
          <TodoCardComponent
            data={taskData}
            status="1"
            bgColor={"#FFEE93"}
            calender={"bx bxs-calendar-plus"}
          />
        </div>

        <div className="w-[25%]">
          <p className="w-full grid items-center after:border-t-2 after:h-[2px] after:block after:w-full after:border-blue-400">
            WORKING ON
          </p>
          <TodoCardComponent
            data={taskData}
            status="2"
            bgColor={"#306BFF"}
            calender={"bx bxs-calendar-minus"}
          />
        </div>

        <div className="w-[25%]">
          <p className="w-full grid items-center after:border-t-2 after:h-[2px] after:block after:w-full after:border-orange-400">
            CHECKING
          </p>
          <TodoCardComponent
            data={taskData}
            status="3"
            bgColor={"#FFB57F"}
            calender={"bx bxs-calendar-x"}
          />
        </div>

        <div className="w-[25%]">
          <p className="w-full grid items-center after:border-t-2 after:h-[2px] after:block after:w-full after:border-green-400">
            COMPLETE
          </p>
          <TodoCardComponent
            data={taskData}
            status="4"
            bgColor={"#78C552"}
            calender={"bx bxs-calendar-check"}
          />
        </div>
      </div>
    </>
  );
}
