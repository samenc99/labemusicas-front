import {LiSearch, MySearchIcon} from "./styled";

export const SearchIcon = ({page})=>{
  return (
    <LiSearch page={page}>
      <MySearchIcon/>
      <p>Search</p>
    </LiSearch>
  )
}