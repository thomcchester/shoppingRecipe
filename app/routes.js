var React=require('react');
import { Route, IndexRedirect, Link } from 'react-router';

//main functionality
import App from './App';

//pages
import Home from './pages/home/Home';
import artl from './pages/addRecipeToList/artl';
import shoppingList from './pages/shoppingList/shoppingList';
import submitRecipe from './pages/submitRecipe/submitRecipe';

import alt from './alt';
import request from 'superagent';

export default (
  <Route component={App}>
    <Route path='/' component={App} />
  </Route>
);



// <Route path='/artl' component={artl} />
// <Route path='/shoppingList' component={shoppingList} />
// <Route path='/submitRecipe' component={submitRecipe} />
