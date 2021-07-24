import styled from "styled-components";

export const Button = styled.button`
  width: 150px;
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

export const ButtonOutlined = styled(Button)`
  background-color: rgba(255, 255, 255, 0.07);
  box-shadow: 3px 3px 6px rgb(0, 0, 0);
`