import axios from "axios";

export const BASE_URL = 'http://localhost:3003'
export const LOGIN = '/user/login'
export const SIGNUP = '/user/signup'
export const MUSIC = '/music'
export const ALBUMS = '/albums'

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