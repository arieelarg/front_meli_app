import {
  Form,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";
const Search = () => {
  const history = useHistory();
  const search = (e) => {
    e.preventDefault();
    const { searchValue } = e.target.elements;

    history.push("?search=" + searchValue.value);
  };
  return (
    <Row className="mt-5 mb-2">
      <Col md={6} sm={12} className="mx-auto">
        <Form onSubmit={search}>
          <Form.Group>
            <InputGroup className="mb-3">
              <FormControl name="searchValue" placeholder="Search alert" />
              <InputGroup.Append>
                <Button variant="outline-secondary" type="submit">
                  Search
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>
        </Form>
      </Col>
    </Row>
  );
};

export default Search;
