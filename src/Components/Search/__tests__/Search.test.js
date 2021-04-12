import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Search from "../Search";

describe("Search", () => {
  let defaultProps;
  beforeEach(() => {
    defaultProps = {};
  });

  test("Should render search component properly", () => {
    const { getByPlaceholderText, getByRole } = render(
      <Router>
        <Search {...defaultProps} />
      </Router>
    );

    const input = getByPlaceholderText(/Buscar alertas/i);
    fireEvent.change(input, { target: { value: "server" } });
    fireEvent.click(getByRole("button", { name: /buscar/i }));
    expect(window.location.href).toBe("http://localhost/?search=server&page=1");
  });
});
