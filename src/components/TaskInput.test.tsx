import { render, screen, fireEvent } from "@testing-library/react";
import { TaskInput } from "./TaskInput";

describe("TaskInput Component", () => {
  test("should render input field and add button", () => {
    const props: any = { onAddTask: jest.fn() };

    render(<TaskInput {...props} />);

    expect(screen.getByPlaceholderText("Enter task name")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Add Task" })).toBeDisabled();
  });

  test("should enable add button when input is not empty", () => {
    const props: any = { onAddTask: jest.fn() };

    render(<TaskInput {...props} />);

    const input = screen.getByPlaceholderText("Enter task name");
    fireEvent.change(input, { target: { value: "New Task" } });

    const addButton = screen.getByRole("button", { name: "Add Task" });
    expect(addButton).not.toBeDisabled();
  });

  test("should call onAddTask with task name when add button is clicked", () => {
    const props: any = { onAddTask: jest.fn() };

    render(<TaskInput {...props} />);

    const input = screen.getByPlaceholderText("Enter task name");
    fireEvent.change(input, { target: { value: "New Task" } });

    const addButton = screen.getByRole("button", { name: "Add Task" });
    fireEvent.click(addButton);

    expect(props.onAddTask).toHaveBeenCalledWith("New Task");
  });

  test("should call onAddTask with task name when Enter key is pressed", () => {
    const props: any = { onAddTask: jest.fn() };

    render(<TaskInput {...props} />);

    const input = screen.getByPlaceholderText("Enter task name");
    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    expect(props.onAddTask).toHaveBeenCalledWith("New Task");
  });

  test("should clear input field after calling onAddTask", () => {
    const props: any = { onAddTask: jest.fn() };

    render(<TaskInput {...props} />);

    const input = screen.getByPlaceholderText("Enter task name");
    fireEvent.change(input, { target: { value: "New Task" } });

    const addButton = screen.getByRole("button", { name: "Add Task" });
    fireEvent.click(addButton);

    expect(input).toHaveValue("");
  });
});
