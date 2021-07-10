import {LiHome, MyHomeIcon} from "./styled";

export const Home = ({page})=>{
  return <LiHome page={page}>
    <MyHomeIcon/>
    <p>Home</p>
  </LiHome>
}