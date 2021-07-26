import {ALBUMS, api, headers, MUSIC, MUSICALL} from "./api";
import type {MusicData} from "../model/Music";

export class MusicController{

  getMusics = ()=>{
    return api.get(MUSIC, headers())
  }

  getMusic = (id : string)=>{
    return api.get(`${MUSIC}/${id}`, headers())
  }

  getMusicAllUsers = (id:string)=>{
    return api.get(`${MUSIC}/${id}/all`, headers())
  }

  getMusicsSearch = (input : string, all? : boolean)=>{
    if(all) {
      return api.get(`${MUSICALL}?title=${input}&author=${input}&album=${input}`, headers())
    }
    return api.get(`${MUSIC}?title=${input}&author=${input}&album=${input}/${all}`, headers())
  }

  getMusicsSearchBy = (input : string, searchBy : string, all? : boolean)=>{
    if(all)
      return api.get(`${MUSICALL}?${searchBy}=${input}`, headers())
    return api.get(`${MUSIC}?${searchBy}=${input}/${all}`, headers())
  }

  getAlbums = ()=>{
    return api.get(MUSIC + ALBUMS, headers())
  }

  addMusic = (form : MusicData)=>{
    return api.post(MUSIC, form, headers())
  }

}