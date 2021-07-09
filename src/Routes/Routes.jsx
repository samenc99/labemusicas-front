import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {LOGIN, MUSIC, SIGNUP} from "./RoutesName";
import {Signup} from "../pages/Sign/Signup";
import {Login} from "../pages/Sign/Login";
import {Musics} from "../pages/Music/Musics/Musics";

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
          <Musics/>
        </Route>
        <Route>
          <div>404</div>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}