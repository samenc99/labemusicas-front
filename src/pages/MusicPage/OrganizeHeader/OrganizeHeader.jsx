import {Content} from "./styled";
import {useState} from "react";
import type {Music} from "../../../model/Music";

export const OrganizeHeader = ({musics, setOrganizedMusics})=>{
  const [title: boolean, setTitle] = useState(false);
  const [author : boolean, setAuthor] = useState(false);
  const [album : boolean, setAlbum] = useState(false);

  const order = (a,b,key,comparator) : Music[]=>{
    if(comparator){ //true order decrescente
      return b[key]>a[key]
    }
    else{ //false order crescente
      return a[key]>b[key]
    }
  }

  const orderTitle = ()=>{
    const newMusics = musics.sort((a,b)=>order(a,b,'title',!title))
    setOrganizedMusics([...newMusics])
    setTitle(!title)
  }

  const orderAuthor = ()=>{
    const newMusics = musics.sort((a,b)=>order(a,b,'author',!author))
    setOrganizedMusics([...newMusics])
    setAuthor(!author)
  }

  const orderAlbum = ()=>{
    const newMusics = musics.sort((a,b)=>order(a,b,'album',!album))
    setOrganizedMusics([...newMusics])
    setAlbum(!album)
  }

  return(
    <Content>
      <p onClick={orderTitle}>TITLE</p>
      <p onClick={orderAuthor}>AUTHOR</p>
      <p onClick={orderAlbum}>ALBUM</p>
    </Content>
  )
}