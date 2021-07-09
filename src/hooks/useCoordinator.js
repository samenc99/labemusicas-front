import {useHistory} from 'react-router-dom'

const SIGNUP = '/signup'
const LOGIN = '/login'
const FEED = '/'

export const useCoordinator = () => {
  const history = useHistory()

  const toSignup = ()=> history.push(SIGNUP)
  const toLogin = ()=> history.push(LOGIN)
  const toFeed = ()=> history.push(FEED)

  const validateLogin = ()=>{
    const token = window.localStorage.getItem('token')
    if(!token)toLogin()
  }

  const verifyLogin = ()=>{
    const token = window.localStorage.getItem('token')
    if(token)toFeed()
  }

  return{
    toSignup, toLogin, toFeed, validateLogin, verifyLogin
  }
}