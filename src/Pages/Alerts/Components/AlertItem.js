import format from "date-fns/format";
import PropTypes from "prop-types";

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

AlertItem.propTypes = {
  id: PropTypes.number.isRequired,
  server: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  server_type: PropTypes.string.isRequired,
};

export default AlertItem;
