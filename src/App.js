import './App.css';
import { BrowserRouter, BrowserRouter as Router,Route,  Link} from 'react-router-dom';
import Home from './Home';

function App() {
  const name = 'react';
  return (
    <Router>
      <Home/>
    </Router>
  );
}

export default App;
