import { useState } from 'react';
import './App.css';
import TransactionList from './TransactionList';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div id="root">
      <h1>Finance Dashboard</h1>

      {/* ปุ่ม Count */}
      <div className="card">
        <button onClick={() => setCount(count + 1)}>เพิ่ม</button>
        <button onClick={() => setCount(count - 1)}>ลด</button>
        <p>Count ตอนนี้: {count}</p>
      </div>

      {/* Transaction List */}
      <TransactionList />

      {/* Footer */}
      <footer>
        <p>Finance Dashboard &copy; 2025</p>
      </footer>
    </div>
  );
}

export default App;
