import { FC, useState } from "react";

interface TaskInputProps {
  onAddTask: (name: string) => void;
}

export const TaskInput: FC<TaskInputProps> = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState("");
  const disableAddButton = taskName.trim() === "";

  const onChangeTaskName = (event: any) => setTaskName(event.target.value);
  const onKeyDown = (event: any) => {
    if (event.key === "Enter") {
      _onAddTask();
    }
  };

  const _onAddTask = () => {
    onAddTask(taskName);
    setTaskName("");
  };

  return (
    <div className={"text-black w-1/3"}>
      <input
        placeholder={"Enter task name"}
        className={"w-2/3"}
        value={taskName}
        onChange={onChangeTaskName}
        onKeyDown={onKeyDown}
      />
      <button
        className={"text-white w-1/3 cursor-pointer bg-blue-400"}
        disabled={disableAddButton}
        onClick={_onAddTask}
      >
        {"Add Task"}
      </button>
    </div>
  );
};
