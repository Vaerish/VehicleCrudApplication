import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListVehicleComponent from './components/ListVehicleComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateVehicleComponent from './components/CreateVehicleComponent';
import ViewVehicleComponent from './components/ViewVehicleComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListVehicleComponent}></Route>
                          <Route path = "/vehicles" component = {ListVehicleComponent}></Route>
                          <Route path = "/add-vehicle/:id" component = {CreateVehicleComponent}></Route>
                          <Route path = "/view-vehicle/:id" component = {ViewVehicleComponent}></Route>
                          { <Route path = "/update-vehicle/:id" component = {CreateVehicleComponent}></Route> }
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;