import {api, headers, MUSIC} from "./api";

export class MusicController{

  getMusics = async()=>{
    return api.get(MUSIC, headers())
  }

  getMusic = async(id : string)=>{
    return api.get(`${MUSIC}/${id}`)
  }

}