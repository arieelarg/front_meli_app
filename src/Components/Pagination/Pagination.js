import { Row, Col, Pagination } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import queryString from "query-string";

const Paginate = ({ actualPage, totalPages }) => {
  const history = useHistory();
  const location = useLocation();
  const arr = Array.from(Array(Math.ceil(totalPages)), (e, i) => i + 1);
  console.log(arr);
  // TO DO: Revisar active
  // console.log(actualPage)
  const { page } = queryString.parse(actualPage.prev);
  console.log(page);
  console.log(+page ? +page + 1 : 1);
  const navigateByPage = (page) => {
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
              onClick={() => navigateByPage(index + 1)}
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

export default Paginate;
