import axios from "axios";

const BASE_URL = 'http://localhost:3003'
export const LOGIN = '/login'
export const SIGNUP = '/signup'
export const MUSIC = '/music'

export const api = axios.create({
  baseURL : BASE_URL
})