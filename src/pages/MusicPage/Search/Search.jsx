import {Content, DivInput, MyInput, MySearchIcon} from "./styled";
import {OrganizeHeader} from "../OrganizeHeader/OrganizeHeader";
import {useInput} from "../../../hooks/useInput";
import {useLocation} from 'react-router-dom'
import {useEffect, useState} from "react";
import {MusicBusiness} from "../../../Business/MusicBusiness";
import type {Music} from "../../../model/Music";

const useQuery = ()=>{
  return new URLSearchParams(useLocation().search)
}

const musicBusiness = new MusicBusiness()

export const Search = ({setCurrentMusicId})=>{
  const [input, setInput] = useInput()
  const query = useQuery()
  const [musics : Music, setMusics] = useState()

  const getMusicsSearchBy = async(input : string, searchBy : string)=>{
    try{
      console.log('fui chamado: ', searchBy, input)
      const musics = await musicBusiness.getMusicsSearchBy(input, searchBy)
      setMusics(musics)
    }catch (err){
      console.log(err)
    }
  }

  const getMusicsSearch = async()=>{
    try{
      const musics = await musicBusiness.getMusicsSearch(input)
      setMusics(musics)
    }catch (err){
      console.log(err)
    }
  }

  useEffect(()=>{
    const album = query.get('album')
    if(album){
      getMusicsSearchBy(album, 'album')
      setInput(album)
    }
  },[])

  return(
    <Content>
      <DivInput>
        <MyInput
          placeholder={'Artists, songs or albums'}
          value={input}
          onChange={setInput}
        />
        <MySearchIcon />
      </DivInput>
      <OrganizeHeader />
    </Content>
  )
}