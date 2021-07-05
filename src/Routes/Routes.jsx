import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {LOGIN, MUSIC, SIGNUP} from "./RoutesName";

export const Routes = ()=>{
  return(
    <BrowserRouter>
      <Switch>
        <Route exat path={SIGNUP}>
          <div>SIGNUP</div>
        </Route>
        <Route exat path={LOGIN}>
          <div>LOGIN</div>
        </Route>
        <Route exat path={MUSIC}>
          <div>LOGIN</div>
        </Route>
        <Route>
          <div>404</div>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}