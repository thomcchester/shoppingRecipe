var React=require('react')
import {Route, IndexRedirect, Link} from 'react-router';
import App from './App';
import Home from './components/Main/Home/Home';
import shoppingList from './components/Main/shoppingList/shoppingList';
import alt from './alt';
import request from 'superagent';
import addRecipeToList from './components/Main/addRecipeToList/addRecipeToList'



export default (
  <Route component={App}>
    <Route path='/' component={Home} />
    <Route path='/shoppingList' component={shoppingList} />
    <Route path='/addRecipeToList' component={addRecipeToList} />
  </Route>
);
