import { useEffect, useState } from "react";
import List from "./Components/List";
import { Container } from "react-bootstrap";
import Search from "../../Components/Search";
import Paginate from "../../Components/Pagination";
import Loading from "../../Components/Loading";
import queryString from "query-string";
import { base_url } from "../../constants/api";

const Alerts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const { search, page } = queryString.parse(window.location.search);
    const fetchData = async (ep) => {
      try {
        const result = await fetch(`${base_url}${ep}`);
        const data = await result.json();
        setData(data);
        // console.log(data);
      } catch (e) {
        setData([]);
      }
      setLoading(false);
    };
    fetchData(`/alerts?search=${search || ""}&page=${page || 1}`);
  }, [window.location.search]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          <Search />
          <List data={data.alerts} />
          {data.alerts.length > 0 && (
            <Paginate actualPage={data} totalPages={data.total / data.limit} />
          )}
        </Container>
      )}
    </>
  );
};

export default Alerts;
