import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Pagination from "../Pagination";

describe("Pagination", () => {
  let defaultProps;
  beforeEach(() => {
    defaultProps = {
      prev: null,
      totalPages: 1,
    };
  });

  test("Should render basic info propertly", () => {
    const { getByText } = render(
      <Router>
        <Pagination {...defaultProps} />
      </Router>
    );
    getByText(/1/i);
  });

  test("Should paginate", () => {
    defaultProps = {
      prev: 1,
      totalPages: 2,
    };
    const { getByText } = render(
      <Router>
        <Pagination {...defaultProps} />
      </Router>
    );
    fireEvent.click(getByText("2"));
    expect(window.location.href).toBe("http://localhost/?search=&page=2");
  });
});
