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
  cursor: pointer;
`

export const ButtonOutlined = styled(Button)`
  background-color: rgba(0,0,0,0);
  box-shadow: 2px 2px 6px rgba(0,0,0,0.5);
`