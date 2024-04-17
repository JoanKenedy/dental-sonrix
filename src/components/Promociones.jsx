// import promotion1 from '../assets/promo-1.jpg'
import promotion2 from '../assets/promo-2.webp'
import promotion3 from '../assets/promos.webp'
import promotion4 from '../assets/muelas.webp'
import urgencias from '../assets/urgencias.webp'
import urgenciasDes from '../assets/urgencias-des.webp'

const Promociones = () => {
  const promos = [
    {
      id: 1,
      imgSrc: promotion3,
      alt: 'Promoción de blanqueamiento dental'
    },
    {
      id: 2,
      imgSrc: promotion2,
      alt: 'Promoción de limpieza dental'
    },
    {
      id: 3,
      imgSrc: promotion4,
      alt: 'Promoción extracción de muelas del juicio'
    }
  ]
  return (
    <div>
      <div className='container-urgencias'>
        <h2>Urgencias</h2>
        <img src={urgencias} alt='Banner Urgencias' className='urgencias' />
        <img src={urgenciasDes} alt='Banner Urgencias' className='urgencias-des' />
      </div>
      <div className='promo'>
        <div className='title'>
          <h2>Promociones</h2>
        </div>
        <section className='promociones'>
          {
            promos.map((promo) => (
              <div className='container-promo' key={promo.id}>
                <img src={promo.imgSrc} alt={promo.alt} className='promotion-img' />
                <a href='https://api.whatsapp.com/send?phone=525652700762' target='_blank' rel='noopener noreferrer'>Contáctanos</a>
              </div>
            ))
          }
        </section>
      </div>
    </div>
  )
}

export default Promociones
