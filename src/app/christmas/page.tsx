"use client";

import { TaskInput } from "@/components/TaskInput";
import { TaskItemChristmas } from "@/components/TaskItemChristmas";
import { Tasks } from "@/components/Tasks";
import React, { useEffect, useState } from "react";
export interface Task {
  id: number;
  name: string;
  isCompleted: boolean;
}

export default function Page() {
  const [taskList, setTaskList] = useState<Task[]>([]);

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

  const onAddTask = (taskName: string) => {
    const task = {
      id: taskList[taskList.length - 1].id + 1,
      name: taskName,
      isCompleted: false,
    };
    setTaskList((tasks) => [...tasks, task]);
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
    <div className={"min-h-screen w-full flex flex-col gap-3 items-center"}>
      <h1 className="text-center w-1/3">Todo ChristMas Theme</h1>
      <TaskInput onAddTask={onAddTask} />
      <Tasks
        tasks={taskList}
        renderTasks={(task) => (
          <TaskItemChristmas
            key={task.id}
            onComplete={onComplete}
            onRemove={onRemove}
            task={task}
          />
        )}
      />
    </div>
  );
}
