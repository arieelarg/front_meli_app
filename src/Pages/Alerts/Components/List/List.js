import { Table, Row, Col } from "react-bootstrap";
import AlertItem from "../AlertItem";
import CustomMessage from "../../../../Components/CustomMessage";
import PropTypes from "prop-types";

const List = (data) => {
  const { data: alerts } = data;
  return (
    <Row>
      <Col>
        {!alerts.length && (
          <CustomMessage message="No se encontraron resultados." />
        )}
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
                <AlertItem key={alert.id} {...alert} />
              ))}
            </tbody>
          </Table>
        )}
      </Col>
    </Row>
  );
};

List.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export default List;
