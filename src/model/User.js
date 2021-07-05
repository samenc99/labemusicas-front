export type UserSignup ={
  name : string,
  nickname : string,
  email : string,
  password : string
}

export type UserLogin = {
  emailOrNickname : string,
  password : string
}