import React from "react";
import './css/App.css';
import './css/style.css';
import './css/normalize.css';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import IndexMain from './pages/IndexMain.js';
import NotFound from './pages/NotFound.js';
import './js/script.js';


function App() {
  return (
    <BrowserRouter>
     
        <Switch>
            <Route exact path='/' component={IndexMain}/>
            <Route component={NotFound}/>
        </Switch>
      
    </BrowserRouter>
  );
}

export default App;
