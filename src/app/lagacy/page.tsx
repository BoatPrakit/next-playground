"use client";

import { TaskInput } from "@/components/TaskInput";
import { TaskItem } from "@/components/TaskItem";
import { Tasks } from "@/components/Tasks";
import React, { useEffect, useState } from "react";
export interface Task {
  id: number;
  name: string;
  isCompleted: boolean;
}

export default function Page() {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [taskName, setTaskName] = useState("");

  useEffect(() => {
    (async () => {
      const resp = await fetch("https://jsonplaceholder.typicode.com/todos");
      const todos = (await resp.json()) as any[];
      const list = todos.map((todo) => ({
        id: todo.id,
        name: todo.title,
        isCompleted: todo.completed,
      }));
      setTaskList(list);
    })();
  }, []);

  const onAddTask = () => {
    const task = {
      id: Date.now(),
      name: taskName,
      isCompleted: false,
    };

    setTaskList((tasks) => [...tasks, task]);
  };

  const onChangeTaskName = (event: any) => {
    setTaskName(event.target.value);
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

  return (
    <div className={"min-h-screen w-full flex flex-col gap-3"}>
      <h1 className="text-center w-1/3">Todo Application</h1>
      <TaskInput
        taskName={taskName}
        onAddTask={onAddTask}
        onChangeTaskName={onChangeTaskName}
      />
      <Tasks tasks={taskList} onComplete={onComplete} onRemove={onRemove} />
    </div>
  );
}
