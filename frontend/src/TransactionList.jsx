import { useState } from 'react';

function TransactionList() {
  const [transactions, setTransactions] = useState([]);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('income'); // income / expense

  const addTransaction = () => {
    if (name.trim() !== '' && amount.trim() !== '' && !isNaN(amount)) {
      setTransactions([
        ...transactions,
        { name, type, amount: parseFloat(amount) },
      ]);
      setName('');
      setAmount('');
    }
  };

  const removeTransaction = (index) => {
    setTransactions(transactions.filter((_, i) => i !== index));
  };

  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpense = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = totalIncome - totalExpense;

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
        {transactions.map((t, i) => (
          <li key={i} className={t.type}>
            {t.name}: {t.amount} ({t.type})
            <button onClick={() => removeTransaction(i)}>ลบ</button>
          </li>
        ))}
      </ul>

      <p>รวมรายรับ: {totalIncome}</p>
      <p>รวมรายจ่าย: {totalExpense}</p>
      <p>ยอดคงเหลือ: {balance}</p>
    </div>
  );
}

export default TransactionList;
