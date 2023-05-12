import './App.css';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="main">
        <h2 className="main-header">React Crud Operations</h2>
        <div>
          <Routes>
            <Route exact path="/create" element={<Create />} />
          </Routes>
        </div>
        <div style={{ marginTop: 20 }}>
          <Routes>
            <Route exact path="/read" element={<Read />} />
          </Routes>
        </div>
        <Routes>
          <Route exact path="/update" element={<Update />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
