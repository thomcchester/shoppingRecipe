import React from 'react';
import {Roue, IndexRedirect, Link} from 'react-router';

//main functionality
import App from './App';

//pages
import Home from './pages/home/Home';
import artl from './pages/artl/artl';
import shoppingList from './pages/shoppingList/shoppingList';
import submitRecipe from './pages/submitRecipe/submitRecipe';

import alt from './alt';
import request from 'superagent';


export default (
  <Route component={App}>
    <Route path="/" component={Home} />
    <Route path="artl" component={artl} />
    <Route path="shoppingList" component={shoppingList} />
    <Route path="submitRecipe" component={submitRecipe} />
  </Route>
)
