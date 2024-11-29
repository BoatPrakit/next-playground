import { render, screen, fireEvent } from "@testing-library/react";
import Page from "./page";

describe("Todo Application", () => {
  test("should render input field, add button, and task list container", () => {
    render(<Page />);

    expect(screen.getByPlaceholderText("Enter task name")).toBeInTheDocument();
    expect(screen.getByText("Add Task")).toBeDisabled();
    expect(screen.getByRole("list")).toBeInTheDocument();
  });

  test("should enable add button when input field is not empty", () => {
    render(<Page />);

    const input = screen.getByPlaceholderText("Enter task name");
    fireEvent.change(input, { target: { value: "New Task" } });

    const addButton = screen.getByText("Add Task");
    expect(addButton).toBeEnabled();
  });

  test("should add a new task when add button is clicked", () => {
    render(<Page />);

    const input = screen.getByPlaceholderText("Enter task name");
    const addButton = screen.getByText("Add Task");

    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(addButton);

    expect(screen.getByText("New Task")).toBeInTheDocument();
    expect(input).toHaveValue("");
    expect(addButton).toBeDisabled();
  });

  test("should mark task as completed when complete button is clicked", () => {
    render(<Page />);

    const input = screen.getByPlaceholderText("Enter task name");
    const addButton = screen.getByText("Add Task");

    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(addButton);

    const completeButton = screen.getByText("Complete");
    fireEvent.click(completeButton);

    expect(completeButton).toBeDisabled();
  });

  test("should remove task when remove button is clicked", () => {
    render(<Page />);

    const input = screen.getByPlaceholderText("Enter task name");
    const addButton = screen.getByText("Add Task");

    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(addButton);

    const removeButton = screen.getByText("x");
    fireEvent.click(removeButton);

    expect(screen.queryByText("New Task")).not.toBeInTheDocument();
  });

  test("should add a task on Enter key press", () => {
    render(<Page />);

    const input = screen.getByPlaceholderText("Enter task name");

    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    expect(screen.getByText("New Task")).toBeInTheDocument();
    expect(input).toHaveValue("");
  });
});
