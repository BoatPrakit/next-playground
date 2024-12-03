import { render, screen, fireEvent } from "@testing-library/react";
import { TaskInput } from "./TaskInput";

describe("TaskInput Component", () => {
  let props: any;

  beforeEach(() => {
    props = {
      onChangeTaskName: jest.fn(),
      onAddTask: jest.fn(),
      taskName: "",
    };
  });

  test("should render input field and add button", () => {
    render(<TaskInput {...props} />);

    expect(screen.getByPlaceholderText("Enter task name")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Add Task" })).toBeDisabled();
  });

  test("should enable add button when input is not empty", () => {
    props.taskName = "New Task";
    render(<TaskInput {...props} />);

    expect(screen.getByRole("button", { name: "Add Task" })).toBeEnabled();
  });

  test("should call onAddTask when add button is clicked", () => {
    props.taskName = "New Task";
    render(<TaskInput {...props} />);

    const addButton = screen.getByRole("button", { name: "Add Task" });
    fireEvent.click(addButton);

    expect(props.onAddTask).toHaveBeenCalled();
  });
});
