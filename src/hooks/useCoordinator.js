import {useHistory} from 'react-router-dom'

const SIGNUP = '/signup'
const LOGIN = '/login'
const FEED = '/'

export const useCoordinator = () => {
  const history = useHistory()

  const toSignup = ()=> history.push(SIGNUP)
  const toLogin = ()=> history.push(LOGIN)
  const toFeed = ()=> history.push(FEED)

  return{
    toSignup, toLogin, toFeed
  }
}