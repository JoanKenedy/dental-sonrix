// eslint-disable-next-line react/prop-types
export const CardModal = ({ title, texto, img }) => {

  return (
    <>
      <img src={img} alt={`Imagotipo de ` + title} />
      <h2>{title} </h2>
      <p>{texto} </p>
      <a
        href="https://api.whatsapp.com/send?phone=525652700762"
        target="_blank"
        id="btnAncla"
        rel="noopener noreferrer"
      >
        Contacto
      </a>
    </>
  );
}