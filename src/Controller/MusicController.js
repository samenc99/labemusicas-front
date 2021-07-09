import {api, headers, MUSIC} from "./api";

export class MusicController{

  getMusics = ()=>{
    return api.get(MUSIC, headers())
  }

  getMusic = (id : string)=>{
    return api.get(`${MUSIC}/${id}`)
  }

}