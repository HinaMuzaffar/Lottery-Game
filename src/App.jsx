import "./App.css";
import Ludo from "./Ludo.jsx";
import TodoList from "./TodoList.jsx";
import Lottery from "./Lottery.jsx";
import sum from "./helper.js";

function App() {
  let winningCondition = (ticket) => {
    return sum(ticket) === 15;
  };
  return (
    <>
      <Lottery n={3} winningCondition={winningCondition}></Lottery>
    </>
  );
}

export default App;
