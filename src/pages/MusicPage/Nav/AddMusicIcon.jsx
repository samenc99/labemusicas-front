import {LiAddMusic, MyAddMusicIcon} from "./styled";

export const AddMusicIcon = ({page})=>{
  return(
    <LiAddMusic page={page}>
      <MyAddMusicIcon/>
      <p>Adicionar música</p>
    </LiAddMusic>
  )
}