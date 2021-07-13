import styled from "styled-components";
import MusicNoteIcon from '@material-ui/icons/MusicNote';

export const Content = styled.main`
  width: 100%;
  height: 100%;
  overflow-y: auto;
`

export const Title = styled.section`
  width: 100%;
  height: 300px;
  background-image: linear-gradient(#4D369A,#131217);
  display: flex;
  align-items: center;
  padding-left: 30px;
`

export const Box = styled.div`
  width: 200px;
  height: 200px;
  background-image: linear-gradient(135deg,#3F13B8, #7B8F88);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 50px black;
  margin-right: 50px;
`

export const MyMusicNoteIcon = styled(MusicNoteIcon)`
  width: 100px;
  height: 100px;
  color: white;
`

export const P = styled.p`
  font-size: 70px;
  color: white;
  font-weight: bold;
`

export const ContentMusics = styled.section`
  width: 100%;
  padding: 0 30px;
`