import { render } from "@testing-library/react";
import { UserList } from "./UserList";

describe("UserList Component", () => {
  it("should render email test@email.com", () => {
    const fakeEmail = "test@email.com";
    const { getByText } = render(<UserList email={fakeEmail} />);
    const expected = getByText("Email: test@email.com");

    expect(expected).toBeInTheDocument();
  });
});
