import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
  Form,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import queryString from "query-string";

const Search = () => {
  const history = useHistory();
  const location = useLocation();
  const search = (e) => {
    e.preventDefault();
    const { searchValue } = e.target.elements;
    if (searchValue.value) {
      const { search, page } = queryString.parse(location.search);
      history.push(
        `?search=${searchValue.value}&page=${
          searchValue.value === search ? page : 1
        }`
      );
    }
  };
  return (
    <Row className="mt-5 mb-2">
      <Col md={6} sm={12} className="d-flex mx-auto">
        <Form onSubmit={search}>
          <Form.Group>
            <InputGroup className="mb-3">
              <FormControl name="searchValue" placeholder="Buscar alertas" />
              <InputGroup.Append>
                <Button variant="outline-secondary" type="submit">
                  Buscar
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>
        </Form>
        <Form onSubmit={""}>
          <Form.Group>
            <Button variant="outline-secondary" type="submit">
              Limpiar
            </Button>
          </Form.Group>
        </Form>
      </Col>
    </Row>
  );
};

export default Search;
