import { useEffect, useState } from "react";

function SummaryCard() {
  const [transactions, setTransactions] = useState([]);
  const API_URL = "http://localhost:5000/api/transactions";

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setTransactions(data))
      .catch((err) => console.error(err));
  }, []);

  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const totalExpense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const balance = totalIncome - totalExpense;

  return (
    <div className="summary-card">
      <p className="income-summary">รวมรายรับ: {totalIncome.toFixed(2)}</p>
      <p className="expense-summary">รวมรายจ่าย: {totalExpense.toFixed(2)}</p>
      <p className="balance-summary">ยอดคงเหลือ: {balance.toFixed(2)}</p>
    </div>
  );
}

export default SummaryCard;
