import {LOGIN} from "../Routes/RoutesName";

export const logout = ()=>{
  const url = window.location.href.split('/')
  const newUrl = url[0]+'//'+url[2]+LOGIN
  window.localStorage.removeItem('token')
  window.location.replace(newUrl)
}