import axios from "axios";

const BASE_URL = 'http://localhost:3003'
export const LOGIN = '/user/login'
export const SIGNUP = '/user/signup'
export const MUSIC = '/music'

export const api = axios.create({
  baseURL : BASE_URL
})