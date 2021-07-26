import {MusicController} from "../Controller/MusicController";
import type {Music, ShortMusic, Album, MusicDTO, MusicData} from "../model/Music";

String.prototype.capitalize = function (){
  return this.charAt(0).toUpperCase() + this.slice(1);
}

export class MusicBusiness{
  musicController = new MusicController()

  getMusics = async():Promise<ShortMusic[]>=>{
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

  getMusicAllUsers = async(id: string):Promise<Music>=>{
    const res = await this.musicController.getMusicAllUsers(id)
    if(res.data.music){
      return res.data.music
    }
    throw new Error('Music not found')
  }

  getMusicsSearch = async(input : string):Promise<ShortMusic[]>=>{
    if(!input)return
    const res = await this.musicController.getMusicsSearch(input)
    console.log({musicas: res.data.musics})
    if(res.data.musics){
      return res.data.musics
    }
    throw new Error('Musics not found')
  }

  getMusicsSearchBy = async(input : string, searchBy : string):Promise<ShortMusic[]>=>{
    if(!input || !searchBy)return
    const res = await this.musicController.getMusicsSearchBy(input, searchBy)
    if(res.data.musics){
      return res.data.musics
    }
    throw new Error(searchBy.capitalize()+ ' not found')
  }

  getAlbums = async():Promise<Album[]>=>{
    const res = await this.musicController.getAlbums()
    if(res.data.albums){
      return res.data.albums
    }
    throw new Error('Albums not found.')
  }

  addMusic = async(form : MusicDTO):Promise<void>=>{
    const newForm : MusicData = {
      ...form,
      genre : form.genre.split(',')
    }
    await this.musicController.addMusic(newForm)
  }

}