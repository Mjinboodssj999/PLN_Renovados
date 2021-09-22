import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import './App.css';
import Main from './components/Main'
import Transparencia from "./components/Transparencia";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
           <Route exact path="/" component={Main}/>
           <Route exact path="/Transparencia" component={Transparencia}/>
        </Switch>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
