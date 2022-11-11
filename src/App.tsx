import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StockDetailPage, StockOverviewPge } from './pages';

function App() {
  return (
    <main className="container">
      <Router>
        <Routes>
          <Route path="/" element={<StockOverviewPge />}></Route>
          <Route path="/detail/:symbol" element={<StockDetailPage />}></Route>
        </Routes>
      </Router>
    </main>
  );
}

export default App;
