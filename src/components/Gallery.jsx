import '../styles/galery.css'
import gallery1 from '../assets/galery-1.webp'
import gallery2 from '../assets/13.webp'
import gallery3 from '../assets/10.webp'
import gallery4 from '../assets/9.webp'
import gallery5 from '../assets/17.webp'
import gallery6 from '../assets/18.webp'
import gallery7 from '../assets/15.webp'
import gallery8 from '../assets/galery-3-1.webp'
import gallery9 from '../assets/galery-6.webp'
import gallery10 from '../assets/galery-4.webp'
import gallery11 from '../assets/galery-5.webp'
import gallery12 from '../assets/galery-7.webp'

const Gallery = () => {
  const galleryImages = [
    {
      imgSrc: gallery1,
      alt: 'Fotografía de la Dra. Marisol con instrumentos'
    },
    {
      imgSrc: gallery2,
      alt: 'Fotografía de la Dra. Marisol atendiendo a un paciente'
    },
    {
      imgSrc: gallery3,
      alt: 'Fotografía de la Dra. Marisol frente a la cámara'
    },
    {
      imgSrc: gallery4,
      alt: 'Fotografía de de la Dra. Marisol atendiendo a un paciente'
    },
    {
      imgSrc: gallery5,
      alt: 'Escritorio de recepción'
    },
    {
      imgSrc: gallery6,
      alt: 'Decoración del consultorio'
    },
    {
      imgSrc: gallery7,
      alt: 'Fotografía de molde realizado a un paciente'
    },
    {
      imgSrc: gallery9,
      alt: 'Fotografía del Dr. Diego'
    },
    {
      imgSrc: gallery12,
      alt: 'Fotografía del Dr. Diego con la mano alzada'
    },
    {
      imgSrc: gallery8,
      alt: 'Fotografía de la Dra. Marisol y del Dr. Diego'
    },
    {
      imgSrc: gallery10,
      alt: 'Fotografía de la Dra. Marisol'
    },
    {
      imgSrc: gallery11,
      alt: 'Fotografía de la Dra. Marisol y del Dr. Diego'
    }
  ]

  return (
    <div className='galery'>
      <h2>Más de nosotros</h2>
      <div className='container-galery'>
        {
          galleryImages.map((item, i) => (
            <div className='item-galery' key={i}>
              <img src={item.imgSrc} alt={item.alt} loading='lazy' decoding='async' />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Gallery
