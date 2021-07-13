import {Content} from "./styled";
import {useContext} from "react";
import {MusicPageContext} from "../MusicPageContext";

export const CardMusic = ({music})=>{

  const {setCurrentMusicId} = useContext(MusicPageContext)

  return(
    <Content onClick={()=>setCurrentMusicId(music.id)}>
      <p>{music.title}</p>
      <p>{music.author}</p>
      <p>{music.album}</p>
    </Content>
  )
}