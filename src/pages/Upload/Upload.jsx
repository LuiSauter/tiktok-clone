import React from 'react'
import styles from './styles.module.css'

const Upload = () => {
  return (
    <div className={styles.upload}>
      <h1>Cargar video</h1>
      <p>Este video se publicara en el perfil de @sauter</p>
      <form>
        <label>
          Leyenda
          <input type='text' />
        </label>
        <label>
          Portada
          <input type='text' />
        </label>
        <button>Publicar</button>
      </form>
    </div>
  )
}

export default Upload
