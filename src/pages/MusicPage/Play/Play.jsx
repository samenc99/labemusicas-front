import {
  Box,
  Content,
  Controls,
  InfosMusic,
  InfoText,
  MyMusicNoteIcon,
  MyPauseButton,
  MyPlayButton,
  Volume
} from "./styled";
import {useContext, useEffect, useState} from "react";
import {MusicPageContext} from "../MusicPageContext";
import {MusicBusiness} from "../../../Business/MusicBusiness";
import type {Music} from "../../../model/Music";

const musicBusiness = new MusicBusiness()

export const Play = ()=>{
  const {currentMusicId} = useContext(MusicPageContext)
  const [audio, setAudio] = useState()
  const [playing, setPlaying] = useState(false)
  const [currentMusic : Music, setCurrentMusic] = useState();

  const getMusic = async()=>{
    try{
      const music = await musicBusiness.getMusicAllUsers(currentMusicId)
      setCurrentMusic(music)
    }catch (err){
      alert(err.message)
    }
  }

  const onClickPlayPause = ()=>{
    if(playing && currentMusic){
      audio.pause()
      setPlaying(false)
    }
    else if(currentMusic){
      audio.play()
      setPlaying(true)
    }
  }

  useEffect(()=>{
    const audioElement = document.getElementById('audio-player')
    setAudio(audioElement)
    if(currentMusic){
      audioElement.play().then(()=>{
        setPlaying(true)
      }).catch(err=>{
        setPlaying(false)
        setCurrentMusic()
        alert('Estamos com problemas para carregar este áudio.')
      })
    }
  },[currentMusic])

  useEffect(()=>{
    if(currentMusicId)getMusic()
  },[currentMusicId])

  return (
    <Content controls>
      {/*<audio controls src={'https://storage.googleapis.com/future-apis.appspot.com/1.mp4'}></audio>*/}
      {currentMusic ?
        <>
          <audio
            id={'audio-player'}
            src={currentMusic.file}
          >
            <p>Seu navegador não suporta áudio</p>
          </audio>
          <InfosMusic>
            <Box>
              <MyMusicNoteIcon/>
            </Box>
            <InfoText>
              <p>{currentMusic.title}</p>
              <p>{currentMusic.author}</p>
            </InfoText>
          </InfosMusic>
        </>
        :
        <InfosMusic></InfosMusic>
      }
      <Controls>
        {
          playing?
            <MyPauseButton onClick={onClickPlayPause}/>
            :
            <MyPlayButton onClick={onClickPlayPause}/>
        }
      </Controls>
      <Volume></Volume>
    </Content>
  )
}