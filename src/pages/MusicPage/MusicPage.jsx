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

export const MusicPage = ()=>{
  const {validateLogin, toHome, toSearch, toAlbums} = useCoordinator()
  validateLogin()
  const {nav} = useParams()
  const [page : string, setPage] = useState('home');
  const [currentMusicId : string, setCurrentMusicId] = useState();

  const provider = {
    currentMusicId, setCurrentMusicId
  }

  useEffect(()=>{
    redirectNav(nav, toHome)
    setPage(nav)
  },[nav])

  return(
    <StylesProvider injectFirst>
      <MyAll>
        <Nav>
          <div onClick={toSearch}><SearchIcon page={page}/></div>
          <div onClick={toHome}><HomeIcon page={page}/></div>
          <div onClick={toAlbums}><AlbumsIcon page={page}/></div>
        </Nav>
        <Content>
          {
            <MusicPageContext.Provider value={provider}>
              {renderPage(page)}
            </MusicPageContext.Provider>
          }
        </Content>
        <PlayContent>Alo</PlayContent>
      </MyAll>
    </StylesProvider>
  )

}