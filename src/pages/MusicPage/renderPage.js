import {Musics} from "./Musics/Musics";
import {Search} from "./Search/Search";

export const renderPage = (page)=>{
  switch (page){
    case 'search':
      return <Search />
    case 'home':
      return <Musics/>
    case 'albums':
      return <div>albums</div>
    default:
      return <Musics/>
  }
}