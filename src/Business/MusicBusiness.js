import {MusicController} from "../Controller/MusicController";
import type {Music, ShortMusic, Album, MusicDTO, MusicData} from "../model/Music";
import {logout} from "../services/logout";

String.prototype.capitalize = function (){
  return this.charAt(0).toUpperCase() + this.slice(1);
}

export class MusicBusiness{
  musicController = new MusicController()

  getMusics = async():Promise<ShortMusic[]>=>{
    try{
      const res = await this.musicController.getMusics()
      if(Array.isArray(res.data.musics)){
        return res.data.musics
      }
      throw new Error()
    }catch (err){
      if(err.response?.data?.message?.includes('Token')){
        alert(err.response.data.message)
        logout()
      }
      else{
        throw new Error(err.response?.data?.message || 'Estamos com problemas internos. Por favor tente novamente mais tarde.')
      }
    }
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

  getMusicsSearch = async(input : string, all?: boolean):Promise<ShortMusic[]>=>{
    try {
      if(!input){
        throw new Error('Por favor, preencha o campo de busca.')
      }
      const res = await this.musicController.getMusicsSearch(input, all)
      if (res.data.musics) {
        return res.data.musics
      }
      throw new Error()
    }catch (err){
      if(err.response?.data?.message?.includes('Token')){
        alert(err.response.data.message)
        logout()
      }
      else{
        throw new Error(err.response?.data?.message || err.message || 'Estamos com problemas internos. Por favor tente novamente mais tarde.')
      }
    }
  }

  getMusicsSearchBy = async(input : string, searchBy : string, all?:boolean):Promise<ShortMusic[]>=>{
    try {
      if(!input || !searchBy){
        throw new Error('Erro ao processar a sua procura. Por favor, preencha o campo de busca.')
      }
      const res = await this.musicController.getMusicsSearchBy(input, searchBy, all)
      if (res.data.musics) {
        return res.data.musics
      }
      throw new Error()
    }catch (err){
      if(err.response?.data?.message?.includes('Token')){
        alert(err.response.data.message)
        logout()
      }
      else{
        throw new Error(err.response?.data?.message || err.message || 'Estamos com problemas internos. Por favor tente novamente mais tarde.')
      }
    }
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