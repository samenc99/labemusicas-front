import {Musics} from "./Musics/Musics";
import {Search} from "./Search/Search";
import {Albums} from "./Albums/Albums";

export const renderPage = (page)=>{
  switch (page){
    case 'search':
      return <Search />
    case 'home':
      return <Musics/>
    case 'albums':
      return <Albums/>
    default:
      return <Musics/>
  }
}