import "./App.css";
import Ludo from "./Ludo.jsx";
import TodoList from "./TodoList.jsx";
import Lottery from "./Lottery.jsx";

function App() {
  return (
    <>
      <Lottery n={3} winningSum={15}></Lottery>
    </>
  );
}

export default App;
