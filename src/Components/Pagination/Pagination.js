import { Row, Col, Pagination } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import queryString from "query-string";
import PropTypes from "prop-types";

const Paginate = ({ prev, totalPages }) => {
  const history = useHistory();
  const location = useLocation();
  const arr = Array.from(Array(Math.ceil(totalPages)), (_, i) => i + 1);

  const { page } = queryString.parse(prev);
  const navigateByPage = (page) => () => {
    const { search } = queryString.parse(location.search);
    history.push(`?search=${search || ""}&page=${page || 1}`);
  };
  return (
    <Row>
      <Col md={6} sm={12} className="mx-auto">
        <Pagination style={{ justifyContent: "center" }}>
          <Pagination.Prev />
          {arr.map((p, index) => (
            <Pagination.Item
              key={index}
              active={(+page ? +page + 1 : 1) === index + 1}
              onClick={navigateByPage(index + 1)}
            >
              {p}
            </Pagination.Item>
          ))}
          <Pagination.Next />
        </Pagination>
      </Col>
    </Row>
  );
};

Paginate.propTypes = {
  totalPages: PropTypes.number.isRequired,
};

export default Paginate;
