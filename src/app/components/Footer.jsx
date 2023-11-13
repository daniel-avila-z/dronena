import Image from 'next/image'
import Logo from '../../../public/assets/mockups/Logo.png'
import '../styles/Footer.css'
import Link from 'next/link'

export default function Footer () {
  return (
    <section id='contacto' className='footer-main-container'>
      <div className='footer-izq-container'>
        <div className='footer-container'>
          <h3 className='footer-subtitulo'>¿Tienes una pregunta?</h3>
          <div className='footer-contacto-container'>
            <div className='footer-texto-container'>
              <p className='footer-texto'>Ateción al cliente</p>
              <p className='footer-texto'>0500-<span className='footer-texto-span'>Dronena</span></p>
            </div>
            <div className='footer-texto-container'>
              <p className='footer-texto'>Sede principal</p>
              <p className='footer-texto'>0251-269.01.11</p>
            </div>
            <div className='footer-texto-container'>
              <p className='footer-texto'>Sede sucursal</p>
              <p className='footer-texto'>0212-219.42.00</p>
            </div>

          </div>
          <div className='footer-texto-container'>
            <p className='footer-texto'><span className='footer-texto-span'>SEDE PRINCIPAL</span>
              Carrera 3 con Calle 3. Edif. Dronena Zona Industrial III. Barquisimeto, Estado Lara , Venezuela.
            </p>
          </div>
          <div className='footer-texto-container'>
            <p className='footer-texto'> <span className='footer-texto-span'>SEDE SUCURSAL CAPITAL</span>
              Zona Ind. del Este, Av. 2, Edif. Drogueria Nena. Guarenas, Estado Miranda, Venezuela.
            </p>
          </div>
          <div className='footer-container'>
            <Image alt='logo' src={Logo} />
          </div>

        </div>
        <div className='footer-container'>
          <h3 className='footer-subtitulo'>Ministerio e Instituciones</h3>
          <div className='footer-contacto-container'>
            <div className='footer-texto-container'>
              {/* <p className='footer-texto'>Ateción al cliente</p> */}
              <Link className='footer-link' href=''>Ministerio del Poder Popular para la Salud.</Link>
            </div>
            <div className='footer-texto-container'>
              {/* <p className='footer-texto'>Ateción al cliente</p> */}
              <Link className='footer-link' href=''>Ministerio del Poder Popular para el Trabajo y Seguridad Social.</Link>
            </div>
            <div className='footer-texto-container'>
              {/* <p className='footer-texto'>Ateción al cliente</p> */}
              <Link className='footer-link' href=''>Instituto Nacional de Prevención, Salud y Seguridad Laboral.</Link>
            </div>
            <div className='footer-texto-container'>
              {/* <p className='footer-texto'>Ateción al cliente</p> */}
              <Link className='footer-link' href=''>Ministerio del Poder Popular para el Comercio.</Link>
            </div>
            <div className='footer-texto-container'>
              {/* <p className='footer-texto'>Ateción al cliente</p> */}
              <Link className='footer-link' href=''>Ministerio del Poder Popular para Ciencia, Tecnología e Industrias Intermedias.</Link>
            </div>
            <div className='footer-texto-container'>
              {/* <p className='footer-texto'>Ateción al cliente</p> */}
              <Link className='footer-link' href=''>Instituto Venezolano de los Seguros Sociales.</Link>
            </div>
            <div className='footer-texto-container'>
              {/* <p className='footer-texto'>Ateción al cliente</p> */}
              <Link className='footer-link' href=''>Servicio Nacional Integrado de Administración Aduanera y Tributaria.</Link>
            </div>
          </div>
        </div>
        <div className='footer-container'>
          <h3 className='footer-subtitulo'>Cámaras y Asociaciones</h3>
          <div className='footer-contacto-container'>
            <div className='footer-texto-container'>
              {/* <p className='footer-texto'>Ateción al cliente</p> */}
              <Link className='footer-link' href=''>Cámara de la Industria Farmacéutica.</Link>
            </div>
          </div>
          <div className='footer-contacto-container'>
            <div className='footer-texto-container'>
              {/* <p className='footer-texto'>Ateción al cliente</p> */}
              <Link className='footer-link' href=''>Cámara Venezolana de Droguerías.</Link>
            </div>
          </div>
          <div className='footer-contacto-container'>
            <div className='footer-texto-container'>
              {/* <p className='footer-texto'>Ateción al cliente</p> */}
              <Link className='footer-link' href=''>Cámara Venezolana de Farmacia.</Link>
            </div>
          </div>
          <h3 className='footer-subtitulo'>Informativos</h3>
          <div className='footer-contacto-container'>
            <div className='footer-texto-container'>
              {/* <p className='footer-texto'>Ateción al cliente</p> */}
              <Link className='footer-link' href=''>Gaceta Oficial de Venezuela.</Link>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-dere-container'>
        <div className='footer-contactanos-container'>
          <h2 className='footer-titulo'>Contactanos</h2>
          <form className='footer-form' action='#'>
            <div className='form-group'>
              <label className='input-titulo'>
                <span>Nombre y Apellido</span>
              </label>
              <input type='text' className='footer-form-input' placeholder='' />
            </div>
            <div className='form-group'>
              <label className='input-titulo'>
                <span>Email</span>
              </label>
              <input type='text' className='footer-form-input' placeholder='' />
            </div>
            <div className='form-group'>
              <label className='input-titulo'>
                <span>Departamento</span>
              </label>
              <select className='footer-form-input' id='estado' name='Departamento'>
                <option value='Gerencia'>Gerencia de Ventas</option>
                <option value='Atención'>Atención al Cliente</option>
                <option value='Soporte'>Soporte Tecnico de Internet</option>
                <option value='GerenciaRH'>Gerencia de Recursos Humanos</option>
                <option value='GerenciaS'>Gerencia de Sistemas</option>
                <option value='Web'>Web Master</option>
              </select>
            </div>
            <div className='footer-form-textarea-container'>
              <textarea className='footer-form-textarea' name='' id='' cols='30' rows='3' placeholder='Escribe aquí tu mensaje' />
            </div>
            <div className=''>
              <button type='enviar' className='footer-boton'>Enviar</button>
            </div>
          </form>
        </div>
      </div>

    </section>
  )
}

// R.I.F. J-08518977-7
