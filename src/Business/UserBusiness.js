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

  signup = async(signup : UserSignup):Promise<string>=>{
    try{
      if(!validateEmail(signup.email)){
        throw new Error('email')
      }
      const res = await this.userController.signup(signup)
      if(!res.data.token){
        throw new Error()
      }
      return res.data.token
    }catch (err){
      throw new Error(err.response?.data?.message || err.message || 'Estamos com problemas internos. Por favor tente novamente mais tarde.')
    }
  }
}