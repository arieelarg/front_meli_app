import { Table, Row, Col } from "react-bootstrap";
import AlertItem from "../AlertItem";
import CustomMessage from "../../../../Components/CustomMessage";

const List = (data) => {
  const { data: alerts } = data;
  return (
    <Row>
      <Col>
        {!alerts.length && <CustomMessage message="No resultado" />}
        {alerts && alerts.length > 0 && (
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
              {alerts.map((alert) => (
                <AlertItem {...alert} />
              ))}
            </tbody>
          </Table>
        )}
      </Col>
    </Row>
  );
};

export default List;
