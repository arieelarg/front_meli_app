import { render } from "@testing-library/react";
import List from "../List";

describe("List", () => {
  let defaultProps;
  beforeEach(() => {
    defaultProps = [
      {
        id: 1,
        server: "Un server",
        created_at: "2021-03-29T02:19:03.000",
        description: "Descripcion",
        server_type: "Virtual",
      },
    ];
  });
  test("Should render basic info propertly", () => {
    const { getByText } = render(<List data={defaultProps} />);
    getByText(/Un server/i);
    getByText(/virtual/i);
    getByText(/descripcion/i);
    getByText(/02-19-03-29-03-2021/i);
  });
  test("Should display empty message", () => {
    defaultProps = [];
    const { getByText } = render(<List data={defaultProps} />);
    getByText(/No se encontraron resultados./i);
  });
});
