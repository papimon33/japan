import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Content from './components/Content';
import ComplexVerbPage from './components/ComplexVerbPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <main className="main">
          <Routes>
            <Route path="/" element={<ComplexVerbPage/>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
