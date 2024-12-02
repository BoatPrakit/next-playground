import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Page from "./page";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        { id: 1, title: "Task 1", completed: false },
        { id: 2, title: "Task 2", completed: true },
      ]),
  })
) as jest.Mock;

describe("Todo Application", () => {
  test("should render input field, add button, and task list container", async () => {
    render(<Page />);

    await waitFor(() => {
      expect(
        screen.getByPlaceholderText("Enter task name")
      ).toBeInTheDocument();
      expect(screen.getByText("Add Task")).toBeDisabled();
      expect(screen.getByRole("list")).toBeInTheDocument();
    });
  });

  test("should enable add button when input field is not empty", async () => {
    render(<Page />);

    await waitFor(() => {
      const input = screen.getByPlaceholderText("Enter task name");
      fireEvent.change(input, { target: { value: "New Task" } });

      const addButton = screen.getByText("Add Task");
      expect(addButton).toBeEnabled();
    });
  });

  test("should add a new task when add button is clicked", async () => {
    render(<Page />);

    await waitFor(() => {
      const input = screen.getByPlaceholderText("Enter task name");
      const addButton = screen.getByText("Add Task");

      fireEvent.change(input, { target: { value: "New Task" } });
      fireEvent.click(addButton);

      expect(screen.getByText("New Task")).toBeInTheDocument();
      expect(input).toHaveValue("");
      expect(addButton).toBeDisabled();
    });
  });

  test("should mark task as completed when complete button is clicked", async () => {
    render(<Page />);
    await waitFor(() => {
      const input = screen.getByPlaceholderText("Enter task name");
      const addButton = screen.getByText("Add Task");

      fireEvent.change(input, { target: { value: "New Task" } });
      fireEvent.click(addButton);

      const completeButton = screen.getByText("Complete");
      fireEvent.click(completeButton);

      expect(completeButton).toBeDisabled();
    });
  });

  test("should remove task when remove button is clicked", async () => {
    render(<Page />);

    await waitFor(() => {
      const input = screen.getByPlaceholderText("Enter task name");
      const addButton = screen.getByText("Add Task");

      fireEvent.change(input, { target: { value: "New Task" } });
      fireEvent.click(addButton);

      const removeButton = screen.getByText("x");
      fireEvent.click(removeButton);

      expect(screen.queryByText("New Task")).not.toBeInTheDocument();
    });
  });

  test("should add a task on Enter key press", async () => {
    render(<Page />);

    await waitFor(() => {
      const input = screen.getByPlaceholderText("Enter task name");

      fireEvent.change(input, { target: { value: "New Task" } });
      fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

      expect(screen.getByText("New Task")).toBeInTheDocument();
      expect(input).toHaveValue("");
    });
  });
});
