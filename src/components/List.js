import "./List.css";

const List = ({ data }) => {
  const render = data.map((datum, i) => <li key={i}>{datum}</li>);
  return <ul>{render}</ul>;
};

export default List;
