import {useEffect, useState} from "react";
import type {Music} from "../../model/Music";
import {MusicBusiness} from "../../Business/MusicBusiness";
import {useCoordinator} from "../../hooks/useCoordinator";
import {CardMusic} from "./CardMusic/CardMusic";
import { LiAlbums, LiHome, MusicsContent, MyAlbumIcon, MyAll, MyHomeIcon, Nav, PlayContent} from "./styled";
import {Search} from "./Nav/Search";
import {StylesProvider} from "@material-ui/core";
import {Home} from "./Nav/Home";
import {Albums} from "./Nav/Albums";

const musicBusiness = new MusicBusiness()

export const MusicPage = ()=>{
  const {validateLogin} = useCoordinator()
  validateLogin()
  const [musics : Music[], setMusics] = useState([]);
  const [page : string, setPage] = useState('albums');

  const getMusics = async()=>{
    try{
      const newMusics = await musicBusiness.getMusics()
      setMusics(newMusics)
    }catch (err){
      console.log(err)
    }
  }

  useEffect(()=>{
    getMusics()
  },[])

  return(
    <StylesProvider injectFirst>
      <MyAll>
        <Nav>
          <Search/>
          <Home page={page}/>
          <Albums page={page}/>
        </Nav>
        <MusicsContent>
          {
            musics.map(music=><CardMusic music={music}/> )
          }
        </MusicsContent>
        <PlayContent>Alo</PlayContent>
      </MyAll>
    </StylesProvider>
  )

}