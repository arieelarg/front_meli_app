import format from "date-fns/format";

const AlertItem = ({ id, server, created_at, description, server_type }) => {
  return (
    <tr key={id}>
      <td>{server}</td>
      <td>{format(new Date(created_at), "hh-mm-ss-dd-MM-yyyy")}</td>
      <td>{description}</td>
      <td>{server_type}</td>
    </tr>
  );
};

export default AlertItem;
