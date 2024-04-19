// import {  useState, useEffect } from 'react'
// import { Link } from 'react-scroll'
import '../styles/hero.css'
import Foto1 from '../assets/bg-sonrix.webp'

import '../styles/modal.css'

const Hero = () => {
  return (

    <>
      <div className='hero'>
        <img src={Foto1} alt='Fotografía principal del hero Dental Sonrix' className='img-escritorio' loading='eager' />
        <div className='texto-hero'>
          <div className='container-texto-hero'>
            <h2>Dental Sonrix</h2>
            <p>Tu mejor opción para volver a sonreír</p>
          </div>
        </div>
      </div>
    </>
  )
}
export default Hero
