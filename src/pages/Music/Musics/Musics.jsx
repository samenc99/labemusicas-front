import {useEffect, useState} from "react";
import type {Music} from "../../../model/Music";
import {MusicController} from "../../../Controller/MusicController";

const musicController = new MusicController()

export const Musics = ()=>{
  const [musics : Music[], setMusics] = useState();

  const getMusics = async()=>{
    try{
      const res = await musicController.getMusics()
      if(res.data.musics){
        setMusics(res.data.musics)
      }
      else{
        throw new Error('Musics not found')
      }
    }catch (err){
      console.log(err)
    }
  }

  useEffect(()=>{
    getMusics()
  },[])

  console.log({musics})

  return(
    <div>Musics</div>
  )

}