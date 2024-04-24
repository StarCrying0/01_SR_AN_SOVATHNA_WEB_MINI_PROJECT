"use client"
import { changeStatus } from "@/app/action/changeTaskStatus";

function CalendarClick({ calender, taskId, statusNum }) {
  const handleClick = () => {
    changeStatus(taskId, statusNum);
  };

  return (
    <>
      <button onClick={handleClick}>
        <i className={`${calender} text-xl text-gray-400`}></i>
      </button>
    </>
  );
}
export default CalendarClick;
