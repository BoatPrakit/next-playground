import { FC, ReactNode } from "react";
import { TaskItem } from "./TaskItem";
import { Task } from "@/app/lagacy/page";

interface TasksProps {
  tasks: Task[];
  renderTasks: (task: Task) => ReactNode;
}
export const Tasks: FC<TasksProps> = ({ tasks, renderTasks: renderTask }) => {
  return (
    <ul className={"w-1/3 flex flex-col gap-2"}>
      {tasks.map((task) => {
        return renderTask(task);
      })}
    </ul>
  );
};
