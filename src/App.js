import React from 'react';
import { Switch, Route } from "react-router-dom";
import 'purecss/build/pure.css';

// COMPONENTS
import Dumbbells from './component/Dumbbells.jsx';
import FitNewForm from './component/FitNewForm.jsx'
import NavBar from './component/NavBar.jsx';
import Home from './component/Home.jsx'
import Abs from './component/Abs.jsx'
import Chest from './component/Chest.jsx'
import Back from './component/Back.jsx'
import Arm from './component/Arm.jsx'
import Leg from './component/Leg.jsx'
import Shoulder from './component/Shoulder.jsx'
import About from './component/About.jsx'
import Footer from './component/Footer.jsx'

// DATA
import shoulderDumbbells from './data/shoulderWorkout.js';
import absDumbbells from './data/dumbbells.js';
import armDumbbells from './data/armWorkout.js';
import chestDumbbells from './data/chestWorkout';
import backDumbbells from './data/backWorkout'
import legDumbbells from './data/legWorkout'





class App extends React.Component {
state = {
  absDumbbells: absDumbbells,
  shoulderDumbbells: shoulderDumbbells,
  armDumbbells: armDumbbells,
  chestDumbbells: chestDumbbells,
  backDumbbells: backDumbbells,
  legDumbbells: legDumbbells,
};


  
  render() {
    return (
      <div>
        <NavBar/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/note' component={FitNewForm}/>
          <Route exact path='/dumbbells' component={Dumbbells}/>
          <Route exact path='/dumbbells/abs' render={() => (<Abs absDumbbells={this.state.absDumbbells} />)} />
          <Route exact path='/dumbbells/arm' render={() => (<Arm armDumbbells={this.state.armDumbbells} />)}/>
          <Route exact path='/dumbbells/chest' render={() => (<Chest chestDumbbells={this.state.chestDumbbells} />)}/>
          <Route exact path='/dumbbells/back' render={() => (<Back backDumbbells={this.state.backDumbbells} />)}/>
          <Route exact path='/dumbbells/leg' render={() => (<Leg legDumbbells={this.state.legDumbbells} />)}/>
          <Route exact path='/dumbbells/shoulder' render={() => (<Shoulder shoulderDumbbells={this.state.shoulderDumbbells} />)}/>
          <Route exact path='/about' component={About}/>
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App;
