import axios from "axios";

export const BASE_URL = 'https://labemusica.herokuapp.com'
export const LOGIN = '/user/login'
export const SIGNUP = '/user/signup'
export const MUSIC = '/music'
export const ALBUMS = '/albums'
export const MUSICALL = '/music/all'

export const api = axios.create({
  baseURL : BASE_URL
})

export const headers = ()=>{
  const token = window.localStorage.getItem('token')
  return {
    headers:{
      Authorization : token
    }
  }
}