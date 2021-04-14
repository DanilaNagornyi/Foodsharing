import './App.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import FoodItem from './pages/FoodItem/FoodItem';
import { useDispatch } from 'react-redux';
import Profile from './pages/Profile/Profile';
import Food from './pages/Food/Food';
import MainPage from './pages/MainPage/MainPage';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Contacts from './pages/Contacts/Contacts';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { userAuth } from './redux/AC/userAC';
import CompletionOfRegistration from './components/CompletionOfRegistration/CompletionOfRegistration';
import FoodForm from './components/FoodForm/FoodForm';
import RulesPage from './pages/RulesPage/RulesPage';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch('http://localhost:3001/user/checkAuth', {
      credentials: 'include',
    }).then((res) => {
      if (res.status === 200) {
        dispatch(userAuth());
      }
    });
  }, []);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>

        <Route exact path="/food">
          <Food />
        </Route>
        <Route exact path="/category/:name">
          <Food />
        </Route>

        <Route exact path="/registration">
          <Registration />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/contacts">
          <Contacts />
        </Route>

        <Route exact path="/rules">
          <RulesPage />
        </Route>

        <Route exact path="/food/:id">
          <FoodItem />
        </Route>

        <Route exact path="/completionofregistration">
          <CompletionOfRegistration />
        </Route>

        {/* 
        <Route exact path="/fooditem">
          <FoodItem />
        </Route> */}

        {/* <Route exact path="/profile">
          <Profile />
        </Route> */}

        <PrivateRoute exact path="/profile">
          <Profile />
        </PrivateRoute>

        <PrivateRoute exact path="/addfood">
          <FoodForm />
        </PrivateRoute>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
