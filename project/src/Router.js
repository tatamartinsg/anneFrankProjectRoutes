import React from 'react';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home'
import Museum from './pages/Museum';
import ConcentrationCamp from './pages/ConcentrationCamp';

export default function Routes(){
     return(
            <BrowserRouter>
                <Route exact path="/" component={ Home } />
                <Route exact path="/museum" component = { Museum }/>
                <Route exact path="/concentrationCamp" component={ ConcentrationCamp } />
            </BrowserRouter>
     )
    
}
