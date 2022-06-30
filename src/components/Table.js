import "./Table.css";

const Table = ({ data }) => {
  let renderHead = "";
  let renderBody = "";
  if (data.length > 0) {
    let keys = Object.keys(data[0]);
    renderHead = keys.map((key, i) => {
      return <th key={i}>{key}</th>;
    });
    renderBody = data.map((datum, i) => (
      <tr key={i}>
        {keys.map((key, i) => (
          <td key={i}>{datum[key]}</td>
        ))}
      </tr>
    ));
  }

  return (
    <table>
      <thead>
        <tr>{renderHead}</tr>
      </thead>
      <tbody>{renderBody}</tbody>
    </table>
  );
};

export default Table;
