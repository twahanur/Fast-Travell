import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Components/Header/Header';
import HomePage from './Components/HomePage/HomePage';
import Destination from './Components/Destination/Destination';
import Blog from './Components/Blog/Blog';
import LogIn from './Components/LogIn/LogIn';
import Contact from './Components/Contact/Contact';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import BookingVehilcle from "./Components/BookingVehilcle/BookingVehilcle";

export const AllContext = createContext()
// export const VehicleContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [vehicle, setVehicle] = useState({});
  return (
    <div>
      <AllContext.Provider value={{user:[loggedInUser, setLoggedInUser],vehicles:[vehicle, setVehicle]}}>
        <Router>
          {/* <Header /> */}
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>

            <Route path="/homepage">
              <HomePage />
            </Route>

            <PrivateRoute path="/destination/:id">
              <Destination />
            </PrivateRoute>

            <PrivateRoute path="/booking/:id">
              <BookingVehilcle />
            </PrivateRoute>

            <Route path="/blog">
              <Blog />
            </Route>

            <Route path="/contact">
              <Contact />
            </Route>

            <Route path="/login">
              <LogIn />
            </Route>

            <Route path="/bookingVehicle">
              <BookingVehilcle/>
            </Route>

          </Switch>
        </Router>
      </AllContext.Provider>
    </div>
  );
}

export default App;
