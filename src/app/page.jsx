import './styles/globals.css'
import Navbar from './components/Navbar'
// import PhotoSlider from './components/Slider'
import CopyWriting from './components/Copywriting'
import Nosotros from './components/Nosotros'
import Beneficios from './components/Beneficios'
import Cliente from './components/Cliente'
import Footer from './components/Footer'

export default function Home ({ children }) {
  return (
    <>
      <Navbar />
      <main>
        <CopyWriting />
        <Nosotros />
        <Beneficios />
        <Cliente />
        <Footer />
        {/* <PhotoSlider /> */}
        {children}
      </main>
    </>
  )
}
