
export const CardMusic = ({music})=>{
  return(
    <div key={music.id}>
      {music.title}
      {music.author}
    </div>
  )
}