import {LiHome, MyHomeIcon} from "./styled";

export const HomeIcon = ({page})=>{
  return <LiHome page={page}>
    <MyHomeIcon/>
    <p>Home</p>
  </LiHome>
}