import type {ShortMusic} from "../../../model/Music";
import {useEffect, useState} from "react";
import {MusicBusiness} from "../../../Business/MusicBusiness";
import {Box, Content, ContentMusics, MyMusicNoteIcon, P, Title} from "./styled";
import {OrganizeHeader} from "../OrganizeHeader/OrganizeHeader";
import {CardMusic} from "../CardMusic/CardMusic";
import {NotFound} from "../../components/NotFound";
import {Loading} from "../../components/Loading";

const musicBusiness = new MusicBusiness()

export const Musics = ()=>{
  const [musics : ShortMusic[], setMusics] = useState([]);
  const [organizedMusics : ShortMusic[], setOrganizedMusics] = useState()
  const [loading, setLoading] = useState(false)

  const getMusics = async()=>{
    setLoading(true)
    try{
      const newMusics = await musicBusiness.getMusics()
      setMusics(newMusics)
      setOrganizedMusics(newMusics)
    }catch (err){
      if(err.message!=='Songs not found'){
        alert(err.message)
      }
      setOrganizedMusics([])
    }
    setLoading(false)
  }

  useEffect(()=>{
    getMusics()
  },[])

  const renderMusics = ()=>{
    if(organizedMusics?.length===0){
      return <NotFound message={'Musics not found'}/>
    }
    return organizedMusics?.map(music=>{
      return <CardMusic music={music} key={music.id}/>
    })
  }

  return(
    <Content>
      <Title>
        <Box><MyMusicNoteIcon/></Box>
        <P>Added Songs</P>
      </Title>
      <ContentMusics>
        <OrganizeHeader musics={musics} setOrganizedMusics={setOrganizedMusics}/>
        {
          loading?
            <Loading/>
            :
            renderMusics()
        }
      </ContentMusics>
    </Content>
  )
}