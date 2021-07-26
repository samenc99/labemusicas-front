export type Music = {
  id : string,
  title : string,
  author : string,
  date : Date,
  file : string,
  album : string,
  genre : string[],
  userId : string
}

export type ShortMusic = {
  id : string,
  title : string,
  author : string,
  album : string
}

export type Album = {
  title : string,
  quantityMusics : number
}

export type GetMusicQuery = {
  title? : string,
  author? : string,
  album? : string
}

export type MusicDTO = {
  title : string,
  author : string,
  date ?: Date,
  file : string,
  album : any,
  genre : string
}

export type MusicData = MusicDTO & {
  genre : string[]
}