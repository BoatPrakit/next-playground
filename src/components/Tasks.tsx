import { FC } from "react";
import { TaskItem } from "./TaskItem";
import { Task } from "@/app/lagacy/page";

interface TasksProps {
  tasks: Task[];
  onComplete: (id: number) => void;
  onRemove: (id: number) => void;
}
export const Tasks: FC<TasksProps> = ({ tasks, onComplete, onRemove }) => {
  return (
    <ul className={"w-1/3 flex flex-col gap-2"}>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          onComplete={onComplete}
          onRemove={onRemove}
          task={task}
        />
      ))}
    </ul>
  );
};
