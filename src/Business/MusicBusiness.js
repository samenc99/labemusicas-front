import {MusicController} from "../Controller/MusicController";
import type {Music} from "../model/Music";

export class MusicBusiness{
  musicControler = new MusicController()

  getMusics = async():Promise<Music[]>=>{
    const res = await this.musicControler.getMusics()
    if(Array.isArray(res.data.musics)){
      return res.data.musics
    }
    throw new Error('Musics undefined')
  }

  getMusic = async(id : string):Promise<Music>=>{
    const res = await this.musicControler.getMusic(id)
    if(res.data.music){
      return res.data.music
    }
    throw new Error('Music undefined')
  }

}