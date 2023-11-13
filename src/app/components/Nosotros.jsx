import '../styles/Nosotros.css'
import Image from 'next/image'
import IconoManos from '../../../public/assets/mockups/medicamento.gif'
import Vision from '../../../public/assets/mockups/recepcion.gif'
import Fundacion from '../../../public/assets/mockups/fundacion.jpg'

export default function Nosotros () {
  return (
    <article>
      <section id='us' className='us-main-container'>
        <div className='us-titulo-container'>
          <h2 className='us-titulo'>Nosotros</h2>
        </div>
        <div className='us-mv-container'>
          <div className='us-container'>
            <div className='us-texto-container'>
              <div className='us-ticono-container'>
                <h2 className='us'>Nuestra Mision</h2>
                <div className='us-icono-container'>
                  <Image className='us-icono' alt='icono de manos' src={IconoManos} />
                </div>
              </div>
              <p className='us-p'>Brindamos salud y bienestar de calidad a través de servicios y soluciones innovadoras que se adaptan a tus necesidades.</p>
            </div>

          </div>
          <div className='us-container'>
            <div className='us-texto-container'>
              <div className='us-ticono-container'>
                <div className='us-icono-container'>
                  <Image className='us-icono' alt='icono' src={Vision} />
                </div>
                <h2 className='us'>Nuestra Vision</h2>
              </div>
              <p className='us-p'>Queremos ser la marca de referencia en salud, bienestar y logística en Venezuela, ofreciendo la mejor experiencia y satisfacción a nuestros clientes.</p>
            </div>
          </div>
        </div>
      </section>
      <section className='usfund-main-container'>
        <div className='us-titulo-container'>
          <h2 className='us-titulo'>Nuestra Responsabilidad Social</h2>
        </div>
        <div className='usfund-container'>
          <div className='usfund-foto-container'>
            <Image className='usfund-foto' alt='Fundacion nena' src={Fundacion} />
          </div>
          <div className='usfund-p-container'>
            <p className='usfund-p'>Desde nuestros inicios, Droguería Nena lleva a cabo un proceso de ayudas a través de donaciones en medicamentos y efectivo destinadas a la atención de personas e instituciones benéficas, entre otros. Producto de un mayor interés por consolidar su compromiso en el largo plazo, ha decidido impulsar a Fundación Nena, como brazo ejecutor de su acción socialmente responsable, enfocada en el mejor esfuerzo para contribuir al desarrollo humano, mediante acciones que promuevan y apoyen el mejoramiento sostenido de la salud y calidad de vida de individuos, familias y comunidades más vulnerables.</p>
          </div>

        </div>
      </section>
    </article>
  )
}
