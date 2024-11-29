import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { TaskItem } from "./TaskItem";

describe("TaskItem", () => {
  const mockFetchTaskDetails = jest.fn(() =>
    Promise.resolve({
      createdDate: "2024-11-25 12:00 PM",
      userName: "John Doe",
    })
  );

  const props: any = {
    task: { id: 1, name: "Task 1", isCompleted: false },
    onComplete: jest.fn(),
    onRemove: jest.fn(),
    fetchTaskDetails: mockFetchTaskDetails,
  };

  test("renders task name", () => {
    render(<TaskItem {...props} />);
    expect(screen.getByText("Task 1")).toBeInTheDocument();
  });

  test("calls onComplete when complete button is clicked", () => {
    render(<TaskItem {...props} />);
    fireEvent.click(screen.getByRole("button", { name: "Complete" }));
    expect(props.onComplete).toHaveBeenCalledWith(1);
  });

  test("calls onRemove when remove button is clicked", () => {
    render(<TaskItem {...props} />);
    fireEvent.click(screen.getByRole("button", { name: "x" }));
    expect(props.onRemove).toHaveBeenCalledWith(1);
  });

  test("disables complete button for completed tasks", () => {
    render(
      <TaskItem
        {...props}
        task={{ id: 1, name: "Task 1", isCompleted: true }}
      />
    );
    expect(screen.getByRole("button", { name: "Complete" })).toBeDisabled();
  });
});
