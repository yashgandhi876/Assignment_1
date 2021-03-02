import React from "react";
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Login from "./Component/Login";
import Users from "./Component/Users";
import Edit from "./Component/Edit";
import NewUser from "./Component/NewUser";

function App() {
  return (
    <Router>
      <div className="App">
         <Route exact path={"/"} component={Login}/>
         <Route exact path={"/users"} component={Users} />
         <Route exact path={"/edit"} component={Edit} />
         <Route exact path={"/newuser"} component={NewUser} />
      </div>
    </Router>


  );
}

export default App;
