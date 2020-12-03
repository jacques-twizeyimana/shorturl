import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './static/css/loading.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './pages/HomePage';
import NotFound from './pages/not-found';
import Login from './pages/login';
import RedirectLink from './pages/redirect';
import Signup from './pages/signup';
import  Logout from './pages/logout'
import Axios from 'axios'
import Profile from './pages/profile'


function App() {
  const getUserLocationDetails = () =>{
    Axios.get("https://geolocation-db.com/json/09ba3820-0f88-11eb-9ba6-e1dd7dece2b8")
    .then(res =>{
      console.log(res)
        localStorage.setItem('userloc',JSON.stringify(res.data))
    })
    .catch(err =>{
        console.error(err)
    })
  }

  getUserLocationDetails()
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route  path="/" exact  component={HomePage} />
            <Route  path="/login" exact  component={Login} />
            <Route  path="/logout" exact  component={Logout} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/settings" exact component={Signup} />
            <Route path="/analytics" exact component={Signup} />
            <Route path="/:id" exact component={RedirectLink} />
            <Route path="/" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
