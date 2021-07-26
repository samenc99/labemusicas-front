import {Content, DivInput, MyInput, MySearchIcon, Header} from "./styled";
import {OrganizeHeader} from "../OrganizeHeader/OrganizeHeader";
import {useInput} from "../../../hooks/useInput";
import {useLocation} from 'react-router-dom'
import {useEffect, useState} from "react";
import {MusicBusiness} from "../../../Business/MusicBusiness";
import type {ShortMusic} from "../../../model/Music";
import {CardMusic} from "../CardMusic/CardMusic";
import {Loading} from "../../components/Loading";
import {MusicNotFound} from "../../components/MusicNotFound";

const useQuery = ()=>{
  return new URLSearchParams(useLocation().search)
}

const musicBusiness = new MusicBusiness()

export const Search = ({setCurrentMusicId})=>{
  const [input, setInput] = useInput()
  const query = useQuery()
  const [musics : ShortMusic[], setMusics] = useState([])
  const [organizedMusics : ShortMusic[], setOrganizedMusics] = useState()
  const [loading, setLoading] = useState(false)

  const getMusicsSearchBy = async(input : string, searchBy : string)=>{
    setLoading(true)
    try{
      const musicsResponse = await musicBusiness.getMusicsSearchBy(input, searchBy)
      setMusics([...musicsResponse])
      setOrganizedMusics([...musicsResponse])
    }catch (err){
      setMusics([])
      setOrganizedMusics([])
      alert(err.response.message)
    }
    setLoading(false)
  }

  const getMusicsSearch = async()=>{
    setLoading(true)
    try{
      const musicsResponse = await musicBusiness.getMusicsSearch(input)
      setMusics([...musicsResponse])
      setOrganizedMusics([...musicsResponse])
    }catch (err){
      setMusics([])
      setOrganizedMusics([])
      alert(err.response.message)
    }
    setLoading(false)
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
    if(organizedMusics?.length===0){
      return <MusicNotFound message={'Music, artist or album not found'}/>
    }
    return organizedMusics?.map(music=>{
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
          <div onClick={getMusicsSearch}><MySearchIcon /></div>
        </DivInput>
        <OrganizeHeader musics={musics} setOrganizedMusics={setOrganizedMusics}/>
      </Header>
      {
        loading?
          <Loading/>
          :
          renderMusics()
      }
    </Content>
  )
}