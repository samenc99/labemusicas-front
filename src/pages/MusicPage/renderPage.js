import {Musics} from "./Musics/Musics";

export const renderPage = (page)=>{
  switch (page){
    case 'search':
      return <div>search</div>
    case 'home':
      return <Musics/>
    case 'albums':
      return <div>albums</div>
    default:
      return <div>home</div>
  }
}