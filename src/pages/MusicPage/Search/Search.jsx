import {Content, DivInput, MyInput, MySearchIcon, Header} from "./styled";
import {OrganizeHeader} from "../OrganizeHeader/OrganizeHeader";
import {useInput} from "../../../hooks/useInput";
import {useLocation} from 'react-router-dom'
import {useEffect, useState} from "react";
import {MusicBusiness} from "../../../Business/MusicBusiness";
import type {ShortMusic} from "../../../model/Music";
import {CardMusic} from "../CardMusic/CardMusic";

const useQuery = ()=>{
  return new URLSearchParams(useLocation().search)
}

const musicBusiness = new MusicBusiness()

export const Search = ({setCurrentMusicId})=>{
  const [input, setInput] = useInput()
  const query = useQuery()
  const [musics : ShortMusic[], setMusics] = useState([])
  const [organizedMusics : ShortMusic[], setOrganizedMusics] = useState([])

  const getMusicsSearchBy = async(input : string, searchBy : string)=>{
    try{
      const musicsResponse = await musicBusiness.getMusicsSearchBy(input, searchBy)
      setMusics([...musicsResponse])
      setOrganizedMusics([...musicsResponse])
    }catch (err){
      console.log(err)
    }
  }

  const getMusicsSearch = async()=>{
    try{
      const musicsResponse = await musicBusiness.getMusicsSearch(input)
      setMusics([...musicsResponse])
      setOrganizedMusics([...musicsResponse])
    }catch (err){
      console.log(err)
    }
  }

  const onKeyPress = (e)=>{
    if(e.key==='Enter'){
      getMusicsSearch()
    }
  }

  useEffect(()=>{
    const album = query.get('album')
    if(album){
      getMusicsSearchBy(album, 'album')
      setInput(album)
    }
  },[])

  const renderMusics = ()=>{
    return organizedMusics.map(music=>{
      return <CardMusic music={music} key={music.id}/>
    })
  }

  return(
    <Content>
      <Header>
        <DivInput>
          <MyInput
            placeholder={'Artists, songs or albums'}
            value={input}
            onChange={setInput}
            onKeyPress={onKeyPress}
          />
          <MySearchIcon />
        </DivInput>
        <OrganizeHeader musics={musics} setOrganizedMusics={setOrganizedMusics}/>
      </Header>
      {renderMusics()}
    </Content>
  )
}