import type {ShortMusic} from "../../../model/Music";
import {useEffect, useState} from "react";
import {MusicBusiness} from "../../../Business/MusicBusiness";
import {Box, Content, ContentMusics, MyMusicNoteIcon, P, Title} from "./styled";
import {OrganizeHeader} from "../OrganizeHeader/OrganizeHeader";
import {CardMusic} from "../CardMusic/CardMusic";

const musicBusiness = new MusicBusiness()

export const Musics = ()=>{
  const [musics : ShortMusic[], setMusics] = useState([]);
  const [organizedMusics : ShortMusic[], setOrganizedMusics] = useState([])

  const getMusics = async()=>{
    try{
      const newMusics = await musicBusiness.getMusics()
      setMusics(newMusics)
      setOrganizedMusics(newMusics)
    }catch (err){
      console.log(err)
    }
  }

  useEffect(()=>{
    getMusics()
  },[])

  const renderMusics = ()=>{
    return organizedMusics.map(music=>{
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
        {renderMusics()}
      </ContentMusics>
    </Content>
  )
}