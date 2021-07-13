import {api, headers, MUSIC} from "./api";

export class MusicController{

  getMusics = ()=>{
    return api.get(MUSIC, headers())
  }

  getMusic = (id : string)=>{
    return api.get(`${MUSIC}/${id}`)
  }

  getMusicsSearch = (input : string)=>{
    return api.get(`${MUSIC}?title=${input}&author=${input}&album=${input}`)
  }

  getMusicsSearchBy = (input : string, searchBy : string)=>{
    return api.get(`${MUSIC}?${searchBy}=${input}`)
  }

}