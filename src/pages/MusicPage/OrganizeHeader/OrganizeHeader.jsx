import {Content} from "./styled";
import {useState} from "react";
import type {ShortMusic} from "../../../model/Music";
import {useOrganize} from "../../../hooks/useOrganize";

const initial = {title : false, author : false, album : false}

export const OrganizeHeader = ({musics, setOrganizedMusics})=>{

  const [,setOrderBy] = useOrganize(initial, musics, setOrganizedMusics)

  return(
    <Content>
      <p onClick={()=>setOrderBy('title')}>TITLE</p>
      <p onClick={()=>setOrderBy('author')}>AUTHOR</p>
      <p onClick={()=>setOrderBy('album')}>ALBUM</p>
    </Content>
  )
}