import { Task } from "@/app/lagacy/page";
import { FC, useState } from "react";

interface TaskItemProps {
  task: Task;
  onComplete: (id: number) => void;
  onRemove: (id: number) => void;
}
export const TaskItem: FC<TaskItemProps> = ({ task, onComplete, onRemove }) => {
  return (
    <li className={"flex justify-between py-3 bg-gray-400 "}>
      <div className={""}> {task.name} </div>
      <div className="flex flex-between">
        <button
          disabled={task.isCompleted}
          className={"disabled:bg-green-400 bg-blue-300"}
          onClick={() => onComplete(task.id)}
        >
          {"Complete"}
        </button>
        <button
          className={"w-[50px] bg-red-400"}
          onClick={() => onRemove(task.id)}
        >
          {"x"}
        </button>
      </div>
    </li>
  );
};
