import "./App.css";
import Content from "./components/Content";
import Intro from "./components/Intro";
import Synopsis from "./components/Synopsis";
// import Table from "./components/Table";
// import data from "./tableData";

function App() {
  return (
    <div className="App">
      <h1>Node JS Best Practices!</h1>
      <Intro />
      <Synopsis />
      <Content />
      {/* <Table data={data} /> */}
    </div>
  );
}

export default App;
