import {MusicBusiness} from "../../../Business/MusicBusiness";
import type {Album} from "../../../model/Music";
import {useEffect, useState} from "react";
import {Article, Content, MyAlbumOutlinedIcon, Quantity, Title} from "./styled";
import {useCoordinator} from "../../../hooks/useCoordinator";
import {NotFound} from "../../components/NotFound";
import {Loading} from "../../components/Loading";

const musicBusiness = new MusicBusiness()

export const Albums = ()=>{
  const [albums : Album[], setAlbums] = useState();
  const {toSearch} = useCoordinator()
  const [loading, setLoading] = useState(false)

  const getAlbums = async()=>{
    setLoading(true)
    try {
      const albums  = await musicBusiness.getAlbums()
      setAlbums(albums)
    }catch (err){
      setAlbums([])
      if(err.message!=='Albums not found'){
        alert(err.message)
      }
    }
    setLoading(false)
  }

  useEffect(()=>getAlbums(), [])

  const renderAlbums = ()=>{
    if(albums?.length===0){
      return <NotFound message={'Albums not found'}/>
    }
    return albums?.map(album=>{
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
      {
        loading?
          <Loading/>
          :
          renderAlbums()
      }
    </Content>
  )
}