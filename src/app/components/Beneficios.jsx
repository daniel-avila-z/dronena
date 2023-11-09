import Growthchart from '../../../public/assets/mockups/grafico-de-linea.gif'
import Inventario from '../../../public/assets/mockups/completar.gif'
import Cobertura from '../../../public/assets/mockups/ubicacion.gif'
import Tecnologia from '../../../public/assets/mockups/internet.gif'
import Image from 'next/image'
import '../styles/Beneficios.css'

export default function Beneficios () {
  return (
    <section className='ben-main-container'>
      <div className='ben-titulo-container'>
        <h2 className='ben-titulo'>Beneficios</h2>
      </div>
      <div className='ben-containers'>
        <div className='ben-container'>
          <div className='ben-icono-container'>
            <Image className='ben-icono' alt='Crecimineto' src={Growthchart} />
          </div>
          <div className='ben-texto-container'>
            <h3 className='ben-subtitulo'>Alta Rentabilidad</h3>
            <p className='ben-texto'>Lograr negociaciones rentables con nuestros proveedores nos permite ofrecerte las mejores promociones y los más competitivos precios.</p>
          </div>
        </div>
        <div className='ben-container'>
          <div className='ben-icono-container'>
            <Image className='ben-icono' alt='Crecimineto' src={Inventario} />
          </div>
          <div className='ben-texto-container'>
            <h3 className='ben-subtitulo'>Inventario</h3>
            <p className='ben-texto'>Tenemos disponible la más amplia variedad de medicamentos y misceláneos del mercado. Lo que tu farmacia necesita en Dronena lo consigues.</p>
          </div>
        </div>
        <div className='ben-container'>
          <div className='ben-icono-container'>
            <Image className='ben-icono' alt='Crecimineto' src={Cobertura} />
          </div>
          <div className='ben-texto-container'>
            <h3 className='ben-subtitulo'>Cobertura en todo el país</h3>
            <p className='ben-texto'>Contamos con capacidad de entrega a todo el territorio nacional, todos los días de la semana, dependiendo de la ubicación geográfica de la farmaia.</p>
          </div>
        </div>
        <div className='ben-container'>
          <div className='ben-icono-container'>
            <Image className='ben-icono' alt='Crecimineto' src={Tecnologia} />
          </div>
          <div className='ben-texto-container'>
            <h3 className='ben-subtitulo'>Tecnología</h3>
            <p className='ben-texto'>Aceleramos la productividad de las farmacias gracias a nuestras plataformas de autogestión de pedidos, tracking y pagos.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
