import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(180deg, #4C3698, black);
`

export const Form = styled.form`
  min-width: 350px;
  width: 550px;
`

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 50px;
  margin-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  box-shadow: 2px 2px 1px black;
  background-color: rgba(255,255,255, 0.9);
  outline: 0;
  :hover, :focus{
    box-shadow: 2px 2px 15px black;
  }
  color: black;
  font-size: 16px;
`

export const Button = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 20px;
  border: none;
  background-color: #1ed760;
  color: white;
  font-size: 18px;
  font-weight: bold;
  :hover{
    opacity: 80%;
  }
  :active{
    opacity: 100%;
  }
  cursor: pointer;
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