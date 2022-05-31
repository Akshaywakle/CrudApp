import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home'
import About from './components/pages/About';
import Contact from './components/pages/Contact';

import { Switch, Route } from 'react-router-dom'
import NotFound from './components/pages/NotFound';
import AddUser from './components/user/AddUser';
import EditUser from './components/user/EditUser';
import User from './components/user/User';

function App() {
  return (
    <>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route  path='/about' component={About} />
          <Route  path='/contact' component={Contact} />
          <Route path='/addUser' component={AddUser}/>
          <Route path='/editUser/:id' component={EditUser}/>
         

          <Route path='/users/:id' component={User} />
          <Route  component={NotFound}/>

        </Switch>
    </>
  );
}

export default App;
