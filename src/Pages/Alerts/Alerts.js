import { useEffect } from "react";
import List from "./Components/List";
import { Container } from "react-bootstrap";
import Search from "../../Components/Search";
import Paginate from "../../Components/Pagination";
import { useFetch } from "../../hooks/useFetch";
import Loading from "../../Components/Loading";

const Alerts = () => {
  const [data, loading] = useFetch("alerts");
  useEffect(() => {}, []);
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
