import {ALBUMS, api, headers, MUSIC} from "./api";

export class MusicController{

  getMusics = ()=>{
    return api.get(MUSIC, headers())
  }

  getMusic = (id : string)=>{
    return api.get(`${MUSIC}/${id}`, headers())
  }

  getMusicsSearch = (input : string)=>{
    return api.get(`${MUSIC}?title=${input}&author=${input}&album=${input}`, headers())
  }

  getMusicsSearchBy = (input : string, searchBy : string)=>{
    return api.get(`${MUSIC}?${searchBy}=${input}`, headers())
  }

  getAlbums = ()=>{
    return api.get(MUSIC + ALBUMS, headers())
  }

}