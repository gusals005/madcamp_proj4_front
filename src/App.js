import './App.css';
import { BrowserRouter, BrowserRouter as Router,Route,  Link} from 'react-router-dom';
import Home from './Home';
import Login from './components/Login/Login';
import Signup from './components/Login/Signup';

function App() {
  const name = 'react';
  return (
    <Router>
      
      <Route path = '/' component={Home}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/signup' component={Signup}/>
    </Router>
  );
}

export default App;
