import { Tasks } from "./Tasks";
import { render, screen } from "@testing-library/react";

describe("Tasks", () => {
  test("renders tasks", () => {
    const props = {
      tasks: [
        { id: 1, name: "Task 1", isCompleted: false },
        { id: 2, name: "Task 2", isCompleted: false },
      ],
      renderTasks: (task: any) => <div key={task.id}>{task.name}</div>,
    };
    render(<Tasks {...props} />);
    expect(screen.getByText("Task 1")).toBeInTheDocument();
    expect(screen.getByText("Task 2")).toBeInTheDocument();
  });
});
