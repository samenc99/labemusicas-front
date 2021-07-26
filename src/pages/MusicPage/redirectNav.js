const pages = {
  search : 'search',
  home : 'home',
  albums : 'albums',
  addmusic : 'addmusic'
}

export const redirectNav = (nav, toHome)=>{
  const page = pages[nav]
  if(!page){
    toHome()
  }
}