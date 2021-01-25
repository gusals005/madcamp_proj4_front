import './App.css';
import { BrowserRouter, BrowserRouter as Router,Route,  Link} from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Login/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const name = 'react';
  return (
    <Router>
      <Route path = '/home' component={Home}/>
      <Route exact path='/' component={Login}/>
      <Route exact path='/signup' component={Signup}/>
    </Router>
  );
}

export default App;
