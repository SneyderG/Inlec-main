import React from 'react'

export const StatusGame = () => {

  const [Gemas, setGemas] = useState (0)

  const [Puntos, setPuntos] = useState (0)

  const [Vidas, setVidas] = useState (0)
  return (

    <>
    <div className='Gemas'>
      <button>Gemas 1</button>
      <button>Gemas 2</button>
      <button>Gemas 3</button>
    </div>

    <div className='puntos'>
        <button>+5</button>
        <button>+10</button>
        <button>15</button>

    </div>

    </>



  )
}

  