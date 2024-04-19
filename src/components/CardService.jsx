// eslint-disable-next-line react/prop-types
export const CardService = ({ id, title, img, HandleModal }) => {
  return (
    <div className='item-services'>
      <img src={img} alt={`Imagotipo de ${title}`} />
      <h2>{title}</h2>
      <button
        className='btn-services'
        id={id}
        onClick={(e) => HandleModal(e)}
      >
        Ver más
      </button>
    </div>
  )
}
