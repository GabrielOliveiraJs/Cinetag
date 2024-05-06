import styles from './Inicio.module.css'
import Banner from 'components/Banner/Index'
import Titulo from 'components/Titulo/Index'
import Card from 'components/Card/Index'
//import videos from 'json/db.json'
import { useEffect, useState } from 'react'

const Inicio = () => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/GabrielOliveiraJs/cinetag-api/videos')
      .then(resposta => resposta.json())
      .then(dados => {
        setVideos(dados)
      })
  }, [])

  return (
    <>
      <Banner imagem="home" />
      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Titulo>
      <section className={styles.container}>
        {videos.map((video) => {
          return <Card {...video} key={video.id} />
        })}
      </section>
    </>
  )
}

export default Inicio