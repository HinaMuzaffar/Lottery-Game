import { useState } from "react";
import "./Lottery.css";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({ n, winningCondition }) {
  let [ticket, setTicket] = useState([genTicket(n)]);
  let isWining = winningCondition(ticket);

  let buyTicket = () => {
    setTicket(genTicket(n));
  };
  return (
    <div>
      <h1>Lottery Game!</h1>
      <Ticket ticket={ticket}></Ticket>
      <button onClick={buyTicket}>Buy New Ticket</button>
      <h3>{isWining && "Congratulations , You won!"}</h3>
    </div>
  );
}
