import {UserController} from "../Controller/UserController";
import validateEmail from "../services/validateEmail";
import type {UserLogin, UserSignup} from "../model/User";

export class UserBusiness {

  userController = new UserController()

  login = async(login : UserLogin) : Promise<string>=>{
    const res = await this.userController.login(login)
    if(res.data.token){
      return res.data.token
    }
    throw new Error('Token undefined')
  }

  signup = (signup : UserSignup)=>{
    if(!validateEmail(signup.email)){
      throw new Error('email')
    }
    return this.userController.signup(signup)
  }
}