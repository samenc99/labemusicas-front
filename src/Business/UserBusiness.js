import {UserController} from "../Controller/UserController";
import validateEmail from "../services/validateEmail";
import type {UserLogin, UserSignup} from "../model/User";

export class UserBusiness {

  userController = new UserController()

  login = (login : UserLogin)=>{
    return this.userController.login(login)
  }

  signup = (signup : UserSignup)=>{
    if(!validateEmail(signup.email)){
      throw new Error('email')
    }
    return this.userController.signup(signup)
  }
}