import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home/Home';
import Standings from './standings/Standings';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path='/home' component={Home}/>
    <Route exact path='/standings' component={Standings}/>
    {/* <Route exact path='/schedule' component={Schedule}/> */}
  </Switch>
)

export default Routes