import {useHistory} from 'react-router-dom'

const SIGNUP = '/signup'
const LOGIN = '/login'
const HOME = '/music/home'
const SEARCH = '/music/search/search'
const ALBUMS = '/music/albums'
const ADDMUSIC = '/music/addmusic'

export const useCoordinator = () => {
  const history = useHistory()

  const toSignup = ()=> history.push(SIGNUP)
  const toLogin = ()=> history.push(LOGIN)
  const toHome = ()=> history.push(HOME)
  const toSearch = (query)=>{
    if(typeof query==='string')history.push(SEARCH+'?'+query)
    else history.push(SEARCH)
  }
  const toAlbums = ()=>history.push(ALBUMS)
  const toAddMusic = ()=>history.push(ADDMUSIC)

  const validateLogin = ()=>{
    const token = window.localStorage.getItem('token')
    if(!token)toLogin()
  }

  const verifyLogin = ()=>{
    const token = window.localStorage.getItem('token')
    if(token)toHome()
  }

  const logout = ()=>{
    window.localStorage.removeItem('token')
    toLogin()
  }

  return{
    toSignup, toLogin, toHome, validateLogin, verifyLogin, toSearch, toAlbums, toAddMusic, logout
  }
}