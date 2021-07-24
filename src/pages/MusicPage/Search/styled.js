import styled from "styled-components";
import SearchIcon from '@material-ui/icons/Search';


export const Content = styled.main`
  width: 100%;
`

export const DivInput = styled.section`
  width: 100%;
  height: 80px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(#1E153D, #1B1728);
`

export const MyInput = styled.input`
  width: 70%;
  height: 40px;
  border: none;
  border-radius: 25px;
  padding-left: 45px;
  outline: 0;
  background-color: #f3f0f0;
`

export const MySearchIcon = styled(SearchIcon)`
  width: 30px;
  height: 30px;
  color: #7b8f88;
  position: absolute;
  top: 25px;
  left:16%;
  cursor: pointer;

  :hover {
    color: #4c4b4b;
  }
  :active {
    color: #7b8f88;
  }
`

export const Header = styled.header`
  position: sticky;
  top: 0;
`