import {useEffect, useState} from "react";
import {useCoordinator} from "../../hooks/useCoordinator";
import {Content, MyAll, Nav, PlayContent} from "./styled";
import {SearchIcon} from "./Nav/SearchIcon";
import {StylesProvider} from "@material-ui/core";
import {HomeIcon} from "./Nav/HomeIcon";
import {AlbumsIcon} from "./Nav/AlbumsIcon";
import {renderPage} from "./renderPage";
import {MusicPageContext} from "./MusicPageContext";
import {useParams} from 'react-router-dom'
import {redirectNav} from './redirectNav'
import {Play} from "./Play/Play";
import {ExitIcon} from "./Nav/ExitIcon";
import {AddMusicIcon} from "./Nav/AddMusicIcon";

export const MusicPage = ()=>{
  const {validateLogin, toHome, toSearch, toAlbums, toLogin, toAddMusic} = useCoordinator()
  validateLogin()
  const {nav} = useParams()
  const [page : string, setPage] = useState('home');
  const [currentMusicId : string, setCurrentMusicId] = useState('');

  const provider = {
    currentMusicId, setCurrentMusicId
  }

  const logout = ()=>{
    window.localStorage.removeItem('token')
    toLogin()
  }

  useEffect(()=>{
    redirectNav(nav, toHome)
    setPage(nav)
  },[nav])

  return(
    <StylesProvider injectFirst>
      <MusicPageContext.Provider value={provider}>
        <MyAll>
          <Nav>
            <div onClick={toSearch}><SearchIcon page={page}/></div>
            <div onClick={toHome}><HomeIcon page={page}/></div>
            <div onClick={toAlbums}><AlbumsIcon page={page}/></div>
            <div onClick={toAddMusic}><AddMusicIcon page={page}/></div>
            <div onClick={logout}><ExitIcon/></div>
          </Nav>
          <Content>
            {
              renderPage(page)
            }
          </Content>
          <PlayContent>
            <Play/>
          </PlayContent>
        </MyAll>
      </MusicPageContext.Provider>
    </StylesProvider>
  )

}