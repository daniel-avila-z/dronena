import '../styles/Cliente.css'
import ValidarTelefono from './ValidarTelefono'

export default function Cliente () {
  return (
    <section id='cliente' className='cont-main-container'>
      <div className='cont-titulo-container'>
        <h2 className='cont-titulo'>Queremos Conocerte</h2>
      </div>
      <div className='cont-texto-form'>
        <div className='cont-texto-container'>

          <p className='cont-texto'>
            Gracias por tu interés en convertirte en cliente Nena. Por favor, completa el formulario y uno de nuestros asesores comerciales te contactará a la brevedad. <br /><br />

            Cuando contacten contigo es necesario que tengas actualizados y a la mano: <br />

            RIF, Registro Mercantil y el permiso de instalación y funcionamiento <br />
          </p>
        </div>
        <div className='cont-form-container'>
          <h3 className='cont-form-subtitulo'>Registra tus datos</h3>
          <form className='cont-form'>
            <div className='cont-container'>
              <div className='cont'>
                <label className='input-titulo'>Nombre y Apellido</label>
                <input className='input' type='text' name='FnombreApellido' id='FnombreApellido' />
              </div>
              <div className='cont'>
                <label className='input-titulo'>Correo electrónico</label>
                <input className='input' type='email' name='FcorreoE' id='FcoreoE' />
              </div>
            </div>

            <div className='cont-container'>
              <div className='cont'>
                <label className='input-titulo'>Teléfono</label>
                {/* <input className='input' type='number' name='Ftelefono' id='Ftelefono' /> */}
                {/* <input className='input' id='telefono' type='text' name='telefono' placeholder='(Código de área) Número' /> */}
                <ValidarTelefono />
              </div>
              <div className='cont'>
                <label className='input-titulo'>Nombre de la farmacia</label>
                <input className='input' type='text' name='FnombreFarmacia' id='FnombreFarmacia' />
              </div>
            </div>
            <div className='cont-container'>
              <div className='cont'>
                <label className='input-titulo'>Dirección de la farmacia</label>
                <input className='input' type='text' name='FdireccionFarmacia' id='FdireccionFarmacia' />
              </div>
              <div className='cont'>
                <label className='input-titulo'>
                  <span>Estado</span>
                </label>
                <select className='input' id='estado' name='estadofarmacia'>
                  <option value='Amazonas'>Amazonas</option>
                  <option value='Anzoátegui'>Anzoátegui</option>
                  <option value='Apure'>Apure</option>
                  <option value='Aragua'>Aragua</option>
                  <option value='Barinas'>Barinas</option>
                  <option value='Bolívar'>Bolívar</option>
                  <option value='Carabobo'>Carabobo</option>
                  <option value='Cojedes'>Cojedes</option>
                  <option value='Delta Amacuro'>Delta Amacuro</option>
                  <option value='Falcón'>Falcón</option>
                  <option value='Guárico'>Guárico</option>
                  <option value='Lara'>Lara</option>
                  <option value='Mérida'>Mérida</option>
                  <option value='Miranda'>Miranda</option>
                  <option value='Monagas'>Monagas</option>
                  <option value='Nueva Esparta'>Nueva Esparta</option>
                  <option value='Portuguesa'>Portuguesa</option>
                  <option value='Sucre'>Sucre</option>
                  <option value='Táchira'>Táchira</option>
                  <option value='Trujillo'>Trujillo</option>
                  <option value='La Guaira'>La Guaira</option>
                  <option value='Yaracuy'>Yaracuy</option>
                  <option value='Zulia'>Zulia</option>
                </select>
              </div>
            </div>
          </form>
          <div className=''>
            <button type='enviar' className='registro-boton'>Registrarme</button>
          </div>
        </div>
      </div>

    </section>
  )
}
