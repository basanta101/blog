import React from 'react';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import LoginContainer from '../Login/LoginContainer'
import Homepage from '../Components/Homepage/Homepage';
import Mainpage from '../Components/Mainpage';
import Logout from '../Components/Logout';
import PrivateRouter from './PrivateRouter'


const AppRouter=()=> {
  return (
    <div className="App">
      <BrowserRouter>
         <Switch>
           <Route exact path='/' component={LoginContainer} />
           <PrivateRouter  path='/homepage' component={Homepage} />
           <PrivateRouter path='/mainpage' component={Mainpage}/>
           <PrivateRouter path='/logout' component={Logout}/>
           
         </Switch>
      </BrowserRouter>
    </div>
  );
}

export default AppRouter;
