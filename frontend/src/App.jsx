import './index.css';
import './App.css';
import TransactionList from './TransactionList';
import SummaryCard from './SummaryCard';

function App() {
  return (
    <div id="root">
      <h1>Finance Dashboard</h1>

      <div id="content">
        <div className="left">
          <TransactionList />
        </div>
        <div className="right">
          <SummaryCard />
        </div>
      </div>

      <footer>
        <p>Finance Dashboard &copy; 2025</p>
      </footer>
    </div>
  );
}

export default App;
