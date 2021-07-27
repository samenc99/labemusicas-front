import AlbumOutlinedIcon from '@material-ui/icons/AlbumOutlined';
import styled from 'styled-components'

export const Content = styled.main`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const MyAlbumOutlinedIcon = styled(AlbumOutlinedIcon)`
  width: 100px;
  height: 100px;
  color: inherit;
`

export const Article = styled.article`
  width: 200px;
  height: 250px;
  background-color: #181818;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 20px;
  color: #B3B3B3;
  box-shadow: 0 0 7px #1ED760;
  transition: all 1s;
  :hover{
    color: white;
    box-shadow: 0 0 40px #46328B;
  }
  cursor: pointer;
`

export const Title = styled.p`
  font-size: 20px;
  color: white;
  width: 100%;
  padding: 0 20px;
  margin-top: 20px;
`

export const Quantity = styled.p`
  font-size: 14px;
  color: #B3B3B3;
  width: 100%;
  padding-left: 20px;
`