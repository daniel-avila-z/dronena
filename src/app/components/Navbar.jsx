import Link from 'next/link'
// import Image from 'next/image'
import '../styles/Navbar.css'

export default function Navbar () {
  return (
    <nav className='navbar-main-container'>
      <div className='marca-container'>
        <h2 className='titulo'>Dronena</h2>
      </div>
      <div className='links-container'>
        <ul className='menu'>
          <li>
            <Link href='/'>
              Inicio
            </Link>
          </li>
          <span>|</span>
          <li>
            <Link href='/nosotros'>
              Nosotros
            </Link>
          </li>
          <span>|</span>
          <li>
            <Link href='/cliente'>
              Ser Cliente Nena
            </Link>
          </li>
          <span>|</span>
          <li>
            <Link href='/proveedor'>
              Ser Proveedor Nena
            </Link>
          </li>
          <span>|</span>
          <li>
            <Link href='/suscribirme'>
              Suscribirme
            </Link>
          </li>
          <span>|</span>
          <li>
            <Link href='/contacto'>
              Contáctanos
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
