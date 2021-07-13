import {Content} from "./styled";
import {useState} from "react";
import type {Music} from "../../../model/Music";

const initial = {title : false, author : false, album : false}

export const OrganizeHeader = ({musics, setOrganizedMusics})=>{
  // const [title: boolean, setTitle] = useState(false);
  // const [author : boolean, setAuthor] = useState(false);
  // const [album : boolean, setAlbum] = useState(false);
  const [orderBy, setOrderBy] = useState(initial)

  const order = (a,b,key,comparator) : Music[]=>{
    if(comparator){ //true order decrescente
      return b[key]>a[key]
    }
    else{ //false order crescente
      return a[key]>b[key]
    }
  }

  const orderByClick = (e)=>{
    const name = e.target.attributes.name.nodeValue
    const newMusics = musics.sort((a,b)=>order(a,b,name,!orderBy[name]))
    setOrganizedMusics([...newMusics])
    setOrderBy({...orderBy, [name]:!orderBy[name]})
  }

  // const orderAuthor = (e)=>{
  //   console.log(e.target.attributes.name.nodeValue)
  //   const newMusics = musics.sort((a,b)=>order(a,b,'author',!author))
  //   setOrganizedMusics([...newMusics])
  //   setAuthor(!author)
  // }
  //
  // const orderAlbum = (e)=>{
  //   console.log(e.target.attributes.name.nodeValue)
  //   const newMusics = musics.sort((a,b)=>order(a,b,'album',!album))
  //   setOrganizedMusics([...newMusics])
  //   setAlbum(!album)
  // }

  return(
    <Content>
      <p name='title' onClick={orderByClick}>TITLE</p>
      <p name='author' onClick={orderByClick}>AUTHOR</p>
      <p name='album' onClick={orderByClick}>ALBUM</p>
    </Content>
  )
}