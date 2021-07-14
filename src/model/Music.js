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