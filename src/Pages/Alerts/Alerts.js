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

  const fetchData = async (ep) => {
    try {
      const result = await fetch(`${base_url}${ep}`);
      const data = await result.json();
      setData(data);
      setLoading(false);
    } catch (e) {
      setData([]);
      setLoading(false);
    }
  };

  useEffect(() => {
    const { search } = queryString.parse(window.location.search);
    fetchData(`/alerts${search ? `?server=` + search : ""}`);
  }, [window.location.search]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          <Search />
          <List data={data} />
          <Paginate actualPage={1} />
        </Container>
      )}
    </>
  );
};

export default Alerts;
