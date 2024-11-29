"use client";

import React, { useState } from "react";
interface Task {
  id: number;
  name: string;
  isCompleted: boolean;
}

export default function Page() {
  const [taskName, setTaskName] = useState("");
  const [taskList, setTaskList] = useState<Task[]>([]);

  const onChangeTaskName = (event: any) => setTaskName(event.target.value);

  const onKeyDown = (event: any) => {
    if (event.key === "Enter") {
      onAddTask();
    }
  };

  const onAddTask = () => {
    const task = {
      id: Date.now(),
      name: taskName,
      isCompleted: false,
    };
    setTaskList((tasks) => [...tasks, task]);
    setTaskName("");
  };

  const onComplete = (id: number) => {
    const tasks = taskList.map((task) => {
      if (task.id === id) {
        task.isCompleted = true;
      }
      return task;
    });
    setTaskList(tasks);
  };

  const onRemove = (id: number) => {
    const tasks = taskList.filter((task) => task.id !== id);
    setTaskList(tasks);
  };

  const disableAddButton = taskName.trim() === "";

  return (
    <div className={"min-h-screen w-full flex flex-col gap-3"}>
      <h1 className="text-center w-1/3">Todo Application</h1>
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
          onClick={onAddTask}
        >
          {"Add Task"}
        </button>
      </div>
      <ul className={"w-1/3 flex flex-col gap-2"}>
        {taskList.map((task) => (
          <li
            key={task.id}
            className={"flex justify-between py-3 bg-gray-400 "}
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
        ))}
      </ul>
    </div>
  );
}
