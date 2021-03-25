import ClipLoader from "react-spinners/ClipLoader";

const Loading = () => (
  <ClipLoader
    color="black"
    css={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflow: "show",
      margin: "auto",
    }}
    size={150}
  />
);

export default Loading;
