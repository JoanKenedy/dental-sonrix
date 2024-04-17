import whats from '../assets/whats.jpg'
import '../styles/promociones.css'
import tel from '../assets/telefono.png'
import etiqueta from '../assets/etiqueta-de-precio.png'
import { useEffect, useState, useCallback } from 'react'
import { Link } from 'react-scroll'

export const ButtonFixed = () => {
  const [show, setShow] = useState(false)
  const [y, setY] = useState(document.scrollingElement.scrollHeight)

  const handleNavigation = useCallback(() => {
  // console.log(openMenu)
    if (y > window.scrollY) {
      if (y < 100) {
        setShow(false)
      }
    } else if (y < window.scrollY) {
      setShow(true)
    }
    setY(window.scrollY)
  }, [y])
  useEffect(() => {
    window.addEventListener('scroll', handleNavigation)

    return () => {
      window.removeEventListener('scroll', handleNavigation) //
    }
  }, [handleNavigation])
  return (
    <div className={`container-fixed animado ${show ? 'show' : ''}`}>
      <div className='tel-fixed'>
        <a href='tel:5652700762' target='_blank' rel='noopener noreferrer'>
          <img src={tel} alt='Icono Teléfono' />
        </a>
      </div>
      <div className='urgencias-fixed'>
        <a href='https://api.whatsapp.com/send?phone=525652700762' target='_blank' rel='noopener noreferrer'>
          <img src={whats} alt='Icono WhatsApp' />
        </a>
      </div>
      <div className='txt-urgencia'>
        <h4>Urgencias Dentales</h4>
      </div>
      <div className='to-promos'>
        <Link
          to='promo'
          activeClass='active'
          spy
          smooth
          offset={-50}
          duration={500}
          className='menu-link link-promo'
        >
          <img src={etiqueta} alt='Etiqueta de descuento' />
        </Link>
      </div>
    </div>
  )
}
