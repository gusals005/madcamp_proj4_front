import './App.css';
import { BrowserRouter, BrowserRouter as Router,Route,  Link} from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Totoking from './pages/Totoking/Totoking';
import Aipick from './pages/Aipick/Aipick';
import Ranking from './pages/Ranking/Ranking';
import Factcheck from './pages/Factcheck/Factcheck';
import Mypage from './pages/Mypage/Mypage';
import { selectToken } from './redux/user/selector';
import { useSelector } from 'react-redux';

function App() {
  const name = 'react';
  const token = useSelector(state => {
    return selectToken(state);
  });

  return (
    <Router>
      <Route exact path = '/totoking' component={Totoking}/>
      <Route exact path = '/aipick' component={Aipick}/>
      <Route exact path = '/rank' component={Ranking}/>
      <Route exact path = '/factcheck' component={Factcheck}/>
      <Route exact path = '/home' component={Home}/>
      <Route exact path='/' component={Login}/>
      <Route exact path='/mypage' component={Mypage}/>
    </Router>
  );
}

export default App;
