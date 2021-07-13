import {useState} from "react";
import {useCoordinator} from "../../hooks/useCoordinator";
import {Content, MyAll, Nav, PlayContent} from "./styled";
import {SearchIcon} from "./Nav/SearchIcon";
import {StylesProvider} from "@material-ui/core";
import {HomeIcon} from "./Nav/HomeIcon";
import {AlbumsIcon} from "./Nav/AlbumsIcon";
import {renderPage} from "./renderPage";
import {MusicPageContext} from "./MusicPageContext";
import type {Music} from "../../model/Music";


export const MusicPage = ()=>{
  const {validateLogin} = useCoordinator()
  validateLogin()
  const [page : string, setPage] = useState('home');
  const [currentMusicId : string, setCurrentMusicId] = useState();


  const provider = {
    currentMusicId, setCurrentMusicId
  }

  console.log({currentMusicId})

  return(
    <StylesProvider injectFirst>
      <MyAll>
        <Nav>
          <div onClick={()=>setPage('search')}><SearchIcon page={page}/></div>
          <div onClick={()=>setPage('home')}><HomeIcon page={page}/></div>
          <div onClick={()=>setPage('albums')}><AlbumsIcon page={page}/></div>
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