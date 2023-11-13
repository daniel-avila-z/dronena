import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../../public/assets/mockups/logo-dronena.png'
import '../styles/Navbar.css'

export default function Navbar () {
  return (
    <nav className='navbar-main-container'>
      <div className='marca-container'>
        <h2 className='navbar-titulo'>Dronena</h2>
        <span className='navbar-logo-container'><Image className='navbar-logo' alt='logo' src={Logo} /></span>
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
            <Link href='#us'>
              Nosotros
            </Link>
          </li>
          <span>|</span>
          <li>
            <Link href='#cliente'>
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
            <Link href='#suscribirme'>
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
