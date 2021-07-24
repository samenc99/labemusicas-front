import styled from "styled-components";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import AlbumIcon from "@material-ui/icons/Album";
import SearchIcon from '@material-ui/icons/Search';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export const LiHome = styled.li`
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;

  > p:nth-child(2) {
    color: #f3f0f0;
    font-weight: bold;
    margin-left: 10px;
  }

  background-color: ${props => props.page === 'home' ? '#282828' : '#000000'};
  border-radius: 8px;
  padding-left: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: background-color 1s;

  :hover {
    transition: background-color 0.5s;
    background-color: #171717;
  }
`

export const LiAlbums = styled(LiHome)`
  background-color: ${props => props.page==='albums'? '#282828' : '#000000'};
`

export const LiSearch = styled(LiHome)`
  background-color: ${props => props.page==='search'? '#282828' : '#000000'};
`

export const MyHomeIcon = styled(HomeOutlinedIcon)`
  height: 35px;
  width: 35px;
  color: #f3f0f0;
`

export const MyAlbumIcon = styled(AlbumIcon)`
  height: 35px;
  width: 35px;
  color: #f3f0f0;
`

export const MySearchIcon = styled(SearchIcon)`
  height: 35px;
  width: 35px;
  color: #f3f0f0;
`

export const MyExitIcon = styled(ExitToAppIcon)`
  height: 35px;
  width: 35px;
  color: inherit;
  transition: color 0.5s;
`

export const LiExit = styled(LiHome)`
  background-color: rgba(0, 0, 0, 0);
  position: absolute;
  bottom: 0;
  color: #f3f0f0;
  >p:nth-child(2){
    color: inherit;
    transition: color 0.5s;
  }
  :hover {
    background-color: rgba(0, 0, 0, 0);
    color: #5a5a5a;
  }
`