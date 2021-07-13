import {LiAlbums, MyAlbumIcon} from "./styled";

export const AlbumsIcon = ({page})=>{
  return(
    <LiAlbums page={page}>
      <MyAlbumIcon/>
      <p>Albums</p>
    </LiAlbums>
  )
}