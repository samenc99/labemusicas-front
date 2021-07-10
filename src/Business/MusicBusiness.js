import {MusicController} from "../Controller/MusicController";
import type {Music} from "../model/Music";

export class MusicBusiness{
  musicController = new MusicController()

  getMusics = async():Promise<Music[]>=>{
    const res = await this.musicController.getMusics()
    if(Array.isArray(res.data.musics)){
      return res.data.musics
    }
    throw new Error('MusicPage undefined')
  }

  getMusic = async(id : string):Promise<Music>=>{
    const res = await this.musicController.getMusic(id)
    if(res.data.music){
      return res.data.music
    }
    throw new Error('MusicPage undefined')
  }

}