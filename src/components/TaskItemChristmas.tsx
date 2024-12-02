import { Task } from "@/app/lagacy/page";
import { FC } from "react";

interface TaskItemProps {
  task: Task;
  onComplete: (id: number) => void;
  onRemove: (id: number) => void;
}
export const TaskItemChristmas: FC<TaskItemProps> = ({
  task,
  onComplete,
  onRemove,
}) => {
  const border = task.id % 2 === 0 ? "border-green-500" : "border-red-500";
  return (
    <li
      key={task.id}
      className={`flex justify-between py-3 bg-gray-500/50 border-2 ${border}`}
    >
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
