import { FC, useState } from "react";

interface TaskInputProps {
  taskName: string;
  onAddTask: () => void;
  onChangeTaskName: (event: any) => void;
}

export const TaskInput: FC<TaskInputProps> = ({
  taskName,
  onAddTask,
  onChangeTaskName,
}) => {
  const disableAddButton = taskName.trim() === "";

  return (
    <div className={"text-black w-1/3"}>
      <input
        placeholder={"Enter task name"}
        className={"w-2/3"}
        value={taskName}
        onChange={onChangeTaskName}
      />
      <button
        className={"text-white w-1/3 cursor-pointer bg-blue-400"}
        disabled={disableAddButton}
        onClick={onAddTask}
      >
        {"Add Task"}
      </button>
    </div>
  );
};
