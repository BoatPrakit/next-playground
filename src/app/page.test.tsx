import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./page";

describe("Main Page", () => {
  it("should display Hello World in document", () => {
    render(<Home />);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });

  it("should increase counter when click add button", () => {
    const { getByText, getByRole } = render(<Home />);
    expect(getByText("0")).toBeInTheDocument();

    const button = getByRole("button", { name: "Add" });
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(getByText("1")).toBeInTheDocument();
  });

  // it("should click Add button and count should increase", () => {
  //   const { getByText, getByRole } = render(<Home />);
  //   expect(getByText(/Count: 0/i)).toBeInTheDocument();

  //   const button = getByRole("button", { name: "Add" });
  //   expect(button).toBeInTheDocument();

  //   fireEvent.click(button);
  //   expect(getByText(/Count: 1/i)).toBeInTheDocument();
  // });
});
