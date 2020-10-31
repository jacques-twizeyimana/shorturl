import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './pages/HomePage';
import NotFound from './pages/not-found';
import Login from './pages/login';
import RedirectLink from './pages/redirect';
import Signup from './pages/signup';


function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
            <Route  path="/" exact  component={HomePage} />
            <Route  path="/login" exact  component={Login} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/:id" exact component={RedirectLink} />
            <Route path="/" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
