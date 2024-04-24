import Image from "next/image";
import React from "react";
import EditDeleteDropDownComponent from "./EditDeleteDropDownComponent";
import Link from "next/link";

export default async function TodoCardComponent({ data, status,bgColor }) {
  console.log(data);
  return (
    <>
      {data.data.map((toDoTask) => {
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
        const date = new Date(toDoTask.startDate);
        const format = `${
          months[date.getMonth()]
        } ${date.getDate()}, ${date.getFullYear()}`;
        if (toDoTask.status === parseInt(status)) {
          return (
            <div className="border border-gray rounded-lg mt-5 relative">
              <div className="p-5">
                <div className="flex justify-between">
                  <p className="font-semibold">{toDoTask.taskTitle}</p>
                  <div className="absolute top-2 right-3">
                    <EditDeleteDropDownComponent />
                  </div>
                </div>

                <p className="text-gray-400 text-sm">{toDoTask.description}</p>
                <div className="flex justify-between items-center mt-6">
                  <div className=" text-blue-600 Tag py-2 px-5 rounded-lg font-semibold bg-blue-100 text-sm">
                    {toDoTask.tag}
                  </div>
                  <div className={`rounded-full w-5 h-5 ${toDoTask.status==1?"bg-[#FFEE93]":toDoTask.status==2?"bg-[#306BFF]":toDoTask.status==3?"bg-[#FFB57F]":"bg-[#78C552]"}`}></div>
                </div>
              </div>

              <hr className="text-gray" />
              <div className="flex gap-2 justify-between p-2 text-sm">
                <Link href="/todo-list">
                  <i className="bx bxs-calendar-plus text-xl text-gray-400"></i>
                </Link>
                <div className="flex gap-2">
                  <Image
                    src={"/assets/icons/calendar.svg"}
                    width={20}
                    height={20}
                    alt="calendar icon"
                  />
                  <p className="text-gray-400">{format}</p>
                </div>
              </div>
            </div>
          );
        }
      })}
    </>
  );
}
