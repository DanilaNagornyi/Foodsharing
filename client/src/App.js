import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FoodItem from './pages/FoodItem/FoodItem';
import Profile from './pages/Profile/Profile';
import Food from './pages/Food/Food';
import MainPage from './pages/MainPage/MainPage'
import Registration from './components/Registration/Registration'
import Login from './components/Login/Login'
import NewFoodForm from './components/NewFoodForm/NewFoodFrom'
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/food">
          <Food />
        </Route>
        <Route exact path="/registration">
          <Registration />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <PrivateRoute exact path="/food/:id">
          <FoodItem />
        </PrivateRoute>
        <PrivateRoute exact path="/profile">
          <Profile />
        </PrivateRoute>
        <PrivateRoute exact path="/addform">
          <NewFoodForm />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
