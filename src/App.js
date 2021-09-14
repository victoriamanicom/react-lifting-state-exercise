import "./App.css";
import Game from "./Game";
import ProjectManagement from "./ProductManagement";

function App() {
  return (
    <div>
      {/* <MyComponent /> */}
      {/* <PropsComponent
        header="WELCOME"
        content="This is the welcome page"
        number={7}
        nonexistent="Victoria"
      /> */}
      <Game />
      <hr />
      <ProjectManagement />
      {/* <ProductTable />
      <hr /> */}
      {/* <MilesAhead />
      <hr />
      <Login />
      <hr />
      <Car /> */}
    </div>
  );
}

export default App;
