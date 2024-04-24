import { getAllTaskByWorkspaceId } from "@/app/services/task.service";

async function TaskComponent({ data }) {
  const getAllTask = await getAllTaskByWorkspaceId(data);
  return (
    <>
      {getAllTask.data?.map((allTask) => {
        const months = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];
        const date = new Date(allTask.startDate);

        const getMonth = `${months[date.getMonth()]}`;

        const getDate = `${date.getDate()}`;
        return (
          <div className={`w-full ${allTask.status==1?"bg-[#FFEE93]":allTask.status==2?"bg-[#306BFF]":allTask.status==3?"bg-[#FFB57F]":"bg-[#78C552]"} flex p-4 rounded-lg gap-6 mt-5`}>
            <div className="w-[28%] bg-white flex flex-col items-center py-6 rounded-lg">
              <p className="text-red-500 text-xl font-semibold">{getMonth}</p>
              <p className="font-bold text-2xl">{getDate}</p>
            </div>
            <div className="flex flex-col justify-center w-[70%]">
              <p className="font-bold text-xl">{allTask.taskTitle}</p>
              <p>{allTask.description}</p>
            </div>
            <div className="flex justify-end items-end w-[50%]">
              <button className="py-2 px-10 rounded-lg bg-white font-bold">
                {allTask.status==1?"todo":allTask.status==2?"workingOn":allTask.status==3?"checking":"completed"}
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}
export default TaskComponent;
