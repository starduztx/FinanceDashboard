import { useState, useEffect } from "react";

function TransactionList() {
  const [transactions, setTransactions] = useState([]);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");

  const API_URL = "http://localhost:5000/api/transactions";

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setTransactions(data))
      .catch((err) => console.error(err));
  }, []);

  const addTransaction = () => {
    if (name.trim() && amount.trim() && !isNaN(amount)) {
      const newTransaction = { name, type, amount: parseFloat(amount) };

      fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTransaction),
      })
        .then((res) => res.json())
        .then((data) => {
          setTransactions([...transactions, data]);
          setName("");
          setAmount("");
        })
        .catch((err) => console.error(err));
    }
  };

  const removeTransaction = (id) => {
    fetch(`${API_URL}/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then(() => {
        setTransactions(transactions.filter((t) => t.id !== id));
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="transaction-container">
      <h2>รายการธุรกรรม</h2>

      <input
        type="text"
        placeholder="ชื่อธุรกรรม"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="จำนวนเงิน"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="income">รายรับ</option>
        <option value="expense">รายจ่าย</option>
      </select>
      <button onClick={addTransaction}>เพิ่มธุรกรรม</button>

      <ul>
        {transactions.map((t) => (
          <li key={t.id} className={t.type}>
            {t.name}: {t.amount} ({t.type})
            <button onClick={() => removeTransaction(t.id)}>ลบ</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
