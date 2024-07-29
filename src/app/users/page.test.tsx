import { render, waitFor } from "@testing-library/react";
import axios from "axios";
import UserPage from "./page";

jest.mock("axios", () => {
  return {
    get: jest.fn().mockResolvedValue({
      data: [{ email: "test@email.com" }],
    }),
  };
});

describe("UserPage", () => {
  it("should call axios GET method", async () => {
    render(<UserPage />);
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith(
        "https://jsonplaceholder.typicode.com/users"
      );
    });
  });
});
