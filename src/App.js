import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './pages/HomePage';
import NotFound from './pages/not-found';
import Login from './pages/login';

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
            <Route  path="/" exact  component={HomePage} />
            <Route  path="/login" exact  component={Login} />
            {/* <Route path="enterprise" exact component={} />
            <Route path="/quotes" exact component={Shorten} />
            <Route path="/login" exact component={Footer} />
            <Route path="/signup" exact component={Navbar} /> */}
            <Route path="/:id" component={NotFound} />
            <Route path="/" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
