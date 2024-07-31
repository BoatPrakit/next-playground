import { useMyContext } from "@/components/UseContext/Context";
import ContextIdPage from "./page";
import { render, screen } from "@testing-library/react";
import { useParams } from "next/navigation";
jest.mock("next/navigation", () => ({
  useParams: jest.fn(() => ({ id: "100" })),
}));

jest.mock("@/components/UseContext/Context", () => {
  return {
    useMyContext: jest.fn(),
  };
});

describe("test mocked context", () => {
  beforeEach(() => {
    (useMyContext as jest.Mock).mockReturnValue({ value: "mocked value" });
  });

  test("should render mocked value", () => {
    render(<ContextIdPage />);
    expect(screen.getByText(/mocked value/)).toBeInTheDocument();
  });
});
