import {Content} from "./styled";
import {useState} from "react";
import type {ShortMusic} from "../../../model/Music";

const initial = {title : false, author : false, album : false}

export const OrganizeHeader = ({musics, setOrganizedMusics})=>{
  const [orderBy, setOrderBy] = useState(initial)

  const order = (a,b,key,comparator) : ShortMusic[]=>{
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

  return(
    <Content>
      <p name='title' onClick={orderByClick}>TITLE</p>
      <p name='author' onClick={orderByClick}>AUTHOR</p>
      <p name='album' onClick={orderByClick}>ALBUM</p>
    </Content>
  )
}