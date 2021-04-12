import PropTypes from "prop-types";
import { Alert } from "react-bootstrap";

const CustomMessage = ({ message }) => (
  <Alert variant="secondary">{message}</Alert>
);

CustomMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default CustomMessage;
