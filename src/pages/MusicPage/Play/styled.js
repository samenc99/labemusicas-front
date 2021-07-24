import styled from "styled-components";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import MusicNoteIcon from "@material-ui/icons/MusicNote";

export const Content = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const MyPlayButton = styled(PlayCircleFilledIcon)`
  width: 50px;
  height: 50px;
  color: white;
  cursor: pointer;
  transition: opacity 0.5s;
  :hover{
    opacity: 80%;
  }
  :active{
    transform: scale(0.8);
  }
`

export const MyPauseButton = styled(PauseCircleFilledIcon)`
  width: 50px;
  height: 50px;
  color: white;
  cursor: pointer;
  transition: opacity 0.5s;
  :hover{
    opacity: 80%;
  }
  :active{
    transform: scale(0.8);
  }
`

export const Controls = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const InfosMusic = styled.div`
  width: 30%;
  height: 100%;
  padding-left: 30px;
  display: flex;
  align-items: center;
`

export const Volume = styled.div`
  width: 30%;
  height: 100%;
`

export const MyMusicNoteIcon = styled(MusicNoteIcon)`
  width: 50px;
  height: 50px;
  color: white;
`

export const Box = styled.div`
  width: 70px;
  height: 70px;
  background-image: linear-gradient(180deg,#3F13B8, #7B8F88);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 50px black;
  border-radius: 3px;
`

export const InfoText = styled.div`
  >p{
    :nth-child(1){
      font-size: 15px;
      color: white;
    }
    :nth-child(2){
      font-size: 11px;
      color: #B3B3B3;
    }
  }
  padding-left: 10px;
`