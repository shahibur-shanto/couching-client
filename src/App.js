import "./App.css";
import Home from "./components/Home/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddService from "./components/DashBoard/AddService/AddService";
import Login from "./components/Login/Login";
import { createContext, useState } from "react";
import Enroll from "./components/Home/Enroll/Enroll";
import DashBoard from "./components/DashBoard/DashBoard/DashBoard";
import BookingList from "./components/DashBoard/BookingList/BookingList";
import AllBookings from "./components/DashBoard/AllBookings/AllBookings";
import Reviews from "./components/DashBoard/Reviews/Reviews";
import ManageProducts from "./components/DashBoard/ManageProducts/ManageProducts";
import AddAdmin from "./components/DashBoard/AddAdmin/AddAdmin";
import PrivateRoute from "./components/Login/PrivateRoute";


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        
      <Route exact path="/">
          <Home></Home>
        </Route>
        <PrivateRoute path="/addServices">
          <DashBoard></DashBoard>
          <AddService></AddService>
        </PrivateRoute>
        <PrivateRoute path="/addAdmin">
          <DashBoard></DashBoard>
          <AddAdmin></AddAdmin>
        </PrivateRoute>
        <Route path="/login">
          <Login></Login>
        </Route>
        <PrivateRoute path="/dashboard">
          <DashBoard></DashBoard>
        </PrivateRoute>
        <PrivateRoute path="/admin">
          <DashBoard></DashBoard>
        </PrivateRoute>
        <PrivateRoute path="/bookings">
          <DashBoard></DashBoard>
          <BookingList></BookingList>
        </PrivateRoute>
        
        <PrivateRoute path="/booking/:title">
          <Enroll></Enroll>
        </PrivateRoute>
        
        <PrivateRoute path="/review">
        <DashBoard></DashBoard>
        <Reviews></Reviews>
        </PrivateRoute>
        
        <PrivateRoute path="/manageProducts">
        <DashBoard></DashBoard>
        <ManageProducts></ManageProducts>
        </PrivateRoute>
        
        <PrivateRoute ptah="/allBookingList">
        <DashBoard></DashBoard>
        <AllBookings></AllBookings>
        </PrivateRoute>

        <Route exact path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
