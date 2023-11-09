import './styles/globals.css'
import Navbar from './components/Navbar'
// import PhotoSlider from './components/Slider'
import CopyWriting from './components/Copywriting'
import Nosotros from './components/Nosotros'
import Beneficios from './components/Beneficios'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

export default function Home ({ children }) {
  return (
    <>
      <Navbar />
      <main>
        <CopyWriting />
        <Nosotros />
        <Beneficios />
        <Contacto />
        <Footer />
        {/* <PhotoSlider /> */}
        {children}
      </main>
    </>
  )
}
