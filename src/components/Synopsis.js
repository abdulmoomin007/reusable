import { Fragment } from "react";
import List from "./List";

const Synopsis = () => {
  let synopses = [
    "Project Structure",
    "Coding Style",
    "Error Handling",
    "Quality Assurance",
    "Security Practices",
    "Third Party Libraries",
  ];
  synopses = synopses.map((synopsis) => <h3>{synopsis}</h3>);
  return (
    <Fragment>
      <h2>Synopsis</h2>
      <List data={synopses} />
    </Fragment>
  );
};

export default Synopsis;
