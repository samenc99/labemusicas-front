import {MusicController} from "../Controller/MusicController";
import type {Music} from "../model/Music";

String.prototype.capitalize = function (){
  return this.charAt(0).toUpperCase() + this.slice(1);
}

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

  getMusicsSearch = async(input : string):Promise<Music[]>=>{
    if(!input)return
    const res = await this.musicController.getMusicsSearch(input)
    if(res.data.musics){
      return res.data.musics
    }
    throw new Error('Musics not found')
  }

  getMusicsSearchBy = async(input : string, searchBy : string):Promise<Music[]>=>{
    if(!input || !searchBy)return
    const res = await this.musicController.getMusicsSearchBy(input, searchBy)
    if(res.data.musics){
      return res.data.musics
    }
    throw new Error(searchBy.capitalize()+ ' not found')
  }

}