import { Row, Col, Pagination } from "react-bootstrap";

const Paginate = ({ actualPage, totalPages }) => {
  const arr = Array.from(Array(totalPages), (e, i) => i + 1);
  return (
    <Row>
      <Col md={6} sm={12} className="mx-auto">
        <Pagination>
          <Pagination.Prev />
          {arr.map((p, index) => (
            <Pagination.Item key={index} active={actualPage === index + 1}>
              {p}
            </Pagination.Item>
          ))}

          <Pagination.Next />
        </Pagination>
      </Col>
    </Row>
  );
};

export default Paginate;
