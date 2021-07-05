import {api, LOGIN, SIGNUP} from "./api";
import type {UserLogin, UserSignup} from "../model/User";


export class UserController{
  login = (login : UserLogin)=>{
    return api.post(LOGIN, login)
  }

  signup = (signup : UserSignup)=>{
    return api.post(SIGNUP, signup)
  }
}