import React, { useContext } from "react";
// import IncomeExpenses from './IncomeExpenses'
import { Transaction } from "./Transaction";
import { GlobalContext } from "../context/GlobalState";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map ((transaction) => (
          <Transaction key={transactions.id} transaction={transactions} />
        ))}
      </ul>
    </>
  );
};

// export default IncomeExpenses;
