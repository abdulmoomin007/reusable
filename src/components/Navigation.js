import { Fragment, useState } from "react";

import "./Navigation.css";

const Navigation = ({ navs }) => {
  let render = [];
  const [show, setShow] = useState(false);
  if (navs.length > 0) {
    render = navs.map((nav, i) => <li key={i}>{nav}</li>);
  }
  return (
    <Fragment>
      <div className="icon" onClick={() => setShow(!show)}>
        ==
      </div>
      <ul className={"nav " + (show ? "show" : "")}>{render}</ul>
    </Fragment>
  );
};

export default Navigation;
