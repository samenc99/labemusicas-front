import {
  Content,
  DivInput,
  MyInput,
  MySearchIcon,
  Header,
  FormRadio,
  MyRadio,
  GreenRadio,
  LabelRadio,
  DivRadio
} from "./styled";
import {OrganizeHeader} from "../OrganizeHeader/OrganizeHeader";
import {useInput} from "../../../hooks/useInput";
import {useLocation} from 'react-router-dom'
import {useEffect, useState} from "react";
import {MusicBusiness} from "../../../Business/MusicBusiness";
import type {ShortMusic} from "../../../model/Music";
import {CardMusic} from "../CardMusic/CardMusic";
import {Loading} from "../../components/Loading";
import {NotFound} from "../../components/NotFound";
import { StylesProvider } from '@material-ui/core/styles';

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
  const [searchAll, setSearchAll] = useState(false);

  const getMusicsSearchBy = async(input : string, searchBy : string)=>{
    setLoading(true)
    try{
      const musicsResponse = await musicBusiness.getMusicsSearchBy(input, searchBy)
      setMusics([...musicsResponse])
      setOrganizedMusics([...musicsResponse])
    }catch (err){
      setMusics([])
      setOrganizedMusics([])
      if(err.response.data.message!=='Songs not found'){
        alert(err.response.data.message)
      }
    }
    setLoading(false)
  }

  const getMusicsSearch = async()=>{
    setLoading(true)
    try{
      const musicsResponse = await musicBusiness.getMusicsSearch(input, searchAll)
      setMusics([...musicsResponse])
      setOrganizedMusics([...musicsResponse])
    }catch (err){
      setMusics([])
      setOrganizedMusics([])
      if(err.response.data.message!=='Songs not found'){
        alert(err.response.data.message)
      }
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
      return <NotFound message={'Music, artist or album not found'}/>
    }
    return organizedMusics?.map(music=>{
      return <CardMusic music={music} key={music.id}/>
    })
  }

  const onClickRadio = (all : boolean)=>{
    setSearchAll(all)
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
        <FormRadio>
            <DivRadio onClick={()=>onClickRadio(false)}>
              <GreenRadio
                checked={!searchAll}
              />
              <label>Buscar somente em seus registros</label>
            </DivRadio>
            <DivRadio onClick={()=>onClickRadio(true)}>
              <GreenRadio
                checked={searchAll}
              />
              <label>Buscar a partir de todos usuários</label>
            </DivRadio>
        </FormRadio>
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