import {api, LOGIN, SIGNUP} from "./api";


export class UserController{
  login = (data)=>{
    return api.post(LOGIN)
  }

  signup = (data)=>{
    return api.post(SIGNUP)
  }
}