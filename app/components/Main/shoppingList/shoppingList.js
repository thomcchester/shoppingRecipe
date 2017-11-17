import React from 'react';
import {Link} from 'react-router';
import shoppingListStore from './shoppingListStore'
import shoppingListActions from './shoppingListActions';
import {first, without, findWhere} from 'underscore';

class shoppingList extends React.Component {

  constructor(props) {
    super(props);
    this.state = shoppingListStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    shoppingListStore.listen(this.onChange);
  }

  componentWillUnmount() {
    shoppingListStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {

    return (
      <div className="shoppingListWhole deg">
        <h1 className="mainshoppingList">shoppingList</h1>
        <h2 className="mainshoppingList">What We Do Defines Us</h2>

        <div className="hobbyBoxOfBoxes">
          <ul className="hobbyBoxUl">
            <li className="hobbyBox DadStuff">
              <p><Link to='/shoppingList/DadStuff'>Dad Stuff</Link></p>
              <ul className="subHobbyBoxUl">
                <li className="subHobbyBoxLI"><Link to='/shoppingList/DadStuff/GoodLengthsOfRope'>Rope</Link></li>
                <li className="subHobbyBoxLI"><Link to='/shoppingList/DadStuff/DadJokes'>Jokes</Link></li>
                <li className="subHobbyBoxLI"><Link to='/shoppingList/DadStuff/BeingGoofy'>Goofy</Link></li>
                <li className="subHobbyBoxLI"><Link to='/shoppingList/DadStuff/BrookstoneRelated'>Gadgets</Link></li>
                <li className="subHobbyBoxLI"><Link to='/shoppingList/DadStuff/ComplainingAboutTheWrongTools'>wrong tools</Link></li>
                <li className="subHobbyBoxLI"><Link to='/shoppingList/DadStuff/HomeDepot'>Home Depot</Link></li>
                <li className="subHobbyBoxLI"><Link to='/shoppingList/DadStuff/HurtingOnesSelfWHileTryingToMakeThingsSafer'>Hurting</Link></li>
                <li className="subHobbyBoxLI"><Link to='/shoppingList/DadStuff/PenDrawer'>Pen Drawer</Link></li>
                <li className="subHobbyBoxLI"><Link to='/shoppingList/DadStuff/Tape'>Tape</Link></li>
                <li className="subHobbyBoxLI"><Link to='/shoppingList/DadStuff/UnqualifiedFixing'>Unqualified</Link></li>
              </ul>
            </li>
            <li className="hobbyBox Nerd">
              <p className="NerdP"><Link to='/shoppingList/Nerd'>Nerd</Link></p>
              <ul className="subHobbyBoxUl">
                <li className="subHobbyBoxLI"><Link to='/shoppingList/Nerd/Comics'>Comics</Link></li>
                <li className="subHobbyBoxLI"><Link to='/shoppingList/Nerd/IOT'>IOT</Link></li>
                <li className="subHobbyBoxLI"><Link to='/shoppingList/Nerd/Math'>Math</Link></li>
                <li className="subHobbyBoxLI"><Link to='/shoppingList/Nerd/Physics'>Physics</Link></li>
                <li className="subHobbyBoxLI"><Link to='/shoppingList/Nerd/Puzzles'>Puzzles</Link></li>
                <li className="subHobbyBoxLI"><Link to='/shoppingList/Nerd/SciFi'>SciFi</Link></li>
              </ul>
            </li>
            <li className="hobbyBox Sports">
              <p><Link to='/shoppingList/Sports'>Sports</Link></p>
              <ul className="subHobbyBoxUl">
                <li className="subHobbyBoxLI"><Link to='/shoppingList/Sports/Skiing'>Skiing</Link></li>
                <li className="subHobbyBoxLI"><Link to='/shoppingList/Sports/WeightLifting'>Weight Lifting</Link></li>
                <li className="subHobbyBoxLI"><Link to='/shoppingList/Sports/Golf'>Golf</Link></li>
                <li className="subHobbyBoxLI"><Link to='/shoppingList/Sports/Running'>Running</Link></li>
                <li className="subHobbyBoxLI"><Link to='/shoppingList/Sports/MountainBiking'>Moutain Biking</Link></li>
                <li className="subHobbyBoxLI"><Link to='/shoppingList/Sports/Lacrosse'>Lacrosse</Link></li>
                <li className="subHobbyBoxLI"><Link to='/shoppingList/Sports/Hockey'>Hockey</Link></li>
                <li className="subHobbyBoxLI"><Link to='/shoppingList/Sports/NotWatching'>Not Watching</Link></li>
                <li className="subHobbyBoxLI"><Link to='/shoppingList/Sports/PotentialInterests'>Potential Interests</Link></li>
              </ul>
            </li>
            <li className="hobbyBox shoppingListOther">
              <p><Link to='/shoppingList/Other'>other</Link></p>
              <ul className="subHobbyBoxUl">
                <li className="subHobbyBoxLI"><Link to='/shoppingList/Other/Cooking'>Cooking</Link></li>
                <li className="subHobbyBoxLI"><Link to='/shoppingList/Other/GettingIntoObscureThingsAndDitchingIt'>new</Link></li>
                <li className="subHobbyBoxLI"><Link to='/shoppingList/Other/GreatConversation'>Great</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default shoppingList;
