import "./App.css";
import Content from "./components/Content";
import Intro from "./components/Intro";
// import Navigation from "./components/Navigation";
import Synopsis from "./components/Synopsis";
// import Table from "./components/Table";
// import data from "./tableData";
// import Input from "./components/Input";

function App() {
  return (
    <div className="App">
      {/* <Navigation navs={["Home", "About", "Contact Us", "Login", "Register"]} /> */}
      {/* <Input label="Name" type="text" id="name" /> */}
      <h1>Node JS Best Practices!</h1>
      <Intro />
      <Synopsis />
      <Content />
      {/* <Table data={data} /> */}
    </div>
  );
}

export default App;
