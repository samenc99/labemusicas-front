import styled from "styled-components";
import MusicVideoIcon from '@material-ui/icons/MusicVideo';

export const Container = styled.main`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: linear-gradient(45deg, #121212, #4c3698);
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: min(550px, 100%);
  min-width: 350px;
  align-items: center;
  margin-bottom: 20px;
`

export const DivTitle = styled.div`
  display: flex; 
  margin-bottom: 50px;
  >p{
    font-size: 50px;
    color: white;
    margin-left: 10px;
    >i{
      font-size: 20px;
    }

    display: flex;
    align-items: flex-start;
  }

  align-items: center;
`

export const MyTitleIcon = styled(MusicVideoIcon)`
  color: white;
  width: 100px;
  height: 100px;
`

export const ModalLoading = styled.div`
  position: fixed;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`