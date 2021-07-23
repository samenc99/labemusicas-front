import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import {LOGIN, MUSIC, SIGNUP} from "./RoutesName";
import {Signup} from "../pages/Sign/Signup";
import {Login} from "../pages/Sign/Login";
import {MusicPage} from "../pages/MusicPage/MusicPage";
import {useCoordinator} from "../hooks/useCoordinator";

export const Routes = ()=>{
  return(
    <BrowserRouter>
      <Switch>
        <Route exat path={SIGNUP}>
          <Signup />
        </Route>
        <Route exat path={LOGIN}>
          <Login />
        </Route>
        <Route exat path={MUSIC}>
          <MusicPage/>
        </Route>
        <Route>
          <Redirect to={MUSIC}/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}