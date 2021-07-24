import {MusicBusiness} from "../../../Business/MusicBusiness";
import type {Album} from "../../../model/Music";
import {useEffect, useState} from "react";
import {Article, Content, MyAlbumOutlinedIcon, Quantity, Title} from "./styled";
import {useCoordinator} from "../../../hooks/useCoordinator";

const musicBusiness = new MusicBusiness()

export const Albums = ()=>{
  const [albums : Album[], setAlbums] = useState([]);
  const {toSearch} = useCoordinator()

  const getAlbums = async()=>{
    try {
      const albums  = await musicBusiness.getAlbums()
      setAlbums(albums)
    }catch (err){
      console.log(err)
    }
  }

  useEffect(getAlbums, [])

  const renderAlbums = ()=>{
    return albums.map(album=>{
      return <Article
        key={album.title+String(album.quantityMusics)}
        onClick={()=>toSearch(`album=${album.title}`)}
      >
        <MyAlbumOutlinedIcon/>
        <Title>{album.title}</Title>
        <Quantity>{album.quantityMusics} songs</Quantity>
      </Article>
    })
  }

  return (
    <Content>
      {renderAlbums()}
    </Content>
  )
}