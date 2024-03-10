import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Main Page", () => {
  it("should display Hello World in document", () => {
    render(<Home />);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });
});
