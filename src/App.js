
import './App.css';
import Banner from './components/Home/Banner/Banner';
import Home from './components/Home/Home/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './components/NotFount/NotFound';
import ServiceDetails from './components/Services/ServiceDetails/ServiceDetails';
import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import About from './components/About/About';
import ContactUs from './components/ContactUs/ContactUs';

function App() {
  return (
    <>
   <AuthProvider>

   <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <ContactUs></ContactUs>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <Register></Register>
          </Route>
          <PrivateRoute path="/serviceDetails/:serviceId">
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>

   </AuthProvider>
      
    </>
  );
}

export default App;
