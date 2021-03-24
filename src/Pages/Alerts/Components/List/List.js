import { Table, Row, Col } from "react-bootstrap";

const List = ({ data: alerts }) => {
  return (
    <Row>
      <Col>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Server</th>
              <th>Created at</th>
              <th>Description</th>
              <th>Server type</th>
            </tr>
          </thead>
          <tbody>
            {alerts.map(
              ({ id, server, created_at, description, server_type }) => (
                <tr key={id}>
                  <td>{server}</td>
                  <td>{created_at}</td>
                  <td>{description}</td>
                  <td>{server_type}</td>
                </tr>
              )
            )}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default List;
