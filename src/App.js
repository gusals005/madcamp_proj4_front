import './App.css';
import { BrowserRouter, BrowserRouter as Router,Route,  Link} from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Login/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Totoking from './pages/Totoking/Totoking';
import Aipick from './pages/Aipick/Aipick';
import Ranking from './pages/Ranking/Ranking';
import Factcheck from './pages/Factcheck/Factcheck';

function App() {
  const name = 'react';
  return (
    <Router>
      <Route exact path = '/totoking' component={Totoking}/>
      <Route exact path = '/aipick' component={Aipick}/>
      <Route exact path = '/rank' component={Ranking}/>
      <Route exact path = '/factcheck' component={Factcheck}/>
      <Route exact path = '/home' component={Home}/>
      <Route exact path='/' component={Login}/>
      <Route exact path='/signup' component={Signup}/>
    </Router>
  );
}

export default App;
