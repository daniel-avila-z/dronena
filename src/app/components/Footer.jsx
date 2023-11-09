import Image from 'next/image'
import Logo from '../../../public/assets/mockups/Logo.png'
import '../styles/Footer.css'

export default function Footer () {
  return (
    <section className='footer-main-container'>
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

        </div>
        <div>
          <Image alt='logo' src={Logo} />
        </div>
      </div>
      <div className='footer-dere-container'>
        <div class='footer-contactanos-container'>
          <h2 class='footer-titulo'>Contactanos</h2>
          <form className='footer-form' action='#'>
            <div class='form-group'>
              <label className='input-titulo'>
                <span>Nombre y Apellido</span>
              </label>
              <input type='text' className='footer-form-input' placeholder='' />
            </div>
            <div class='form-group'>
              <label className='input-titulo'>
                <span>Email</span>
              </label>
              <input type='text' className='footer-form-input' placeholder='' />
            </div>
            <div class='form-group'>
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
              <button type='enviar' class='footer-boton'>Enviar</button>
            </div>
          </form>
        </div>
      </div>

    </section>
  )
}

// R.I.F. J-08518977-7
