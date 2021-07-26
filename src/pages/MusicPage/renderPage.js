import {Musics} from "./Musics/Musics";
import {Search} from "./Search/Search";
import {Albums} from "./Albums/Albums";
import {AddMusic} from "./AddMusic/AddMusic";

export const renderPage = (page)=>{
  switch (page){
    case 'search':
      return <Search />
    case 'home':
      return <Musics/>
    case 'albums':
      return <Albums/>
    case 'addmusic':
      return <AddMusic/>
    default:
      return <Musics/>
  }
}