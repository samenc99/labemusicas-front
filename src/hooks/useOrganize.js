import {useState} from "react";
import type {ShortMusic} from "../model/Music";

export const useOrganize = (initial : {}, state : any, setState : Function)=>{
  const [orderBy, setOrderBy] = useState(initial)

  const order = (a,b,key,comparator) : ShortMusic[]=>{
    if(comparator){ //true order decrescente
      return b[key]>a[key]
    }
    else{ //false order crescente
      return a[key]>b[key]
    }
  }

  const orderByClick = (key : string)=>{
    const newState = state.sort((a,b)=>order(a,b,key,!orderBy[key]))
    setState([...newState])
    setOrderBy({...orderBy, [key]:!orderBy[key]})
  }

  return [orderBy,orderByClick]

}