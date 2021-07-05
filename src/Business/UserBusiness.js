import {UserController} from "../Controller/UserController";
import validateEmail from "../services/validateEmail";

export class UserBusiness {

  userController = new UserController()

  login = async(data)=>{
    return await this.userController.login(data)
  }

  signup = async(data)=>{
    if(!validateEmail(data.email)){
      throw new Error('email')
    }
    return await this.signup(data)
  }
}