import './styles/globals.css'
import Navbar from './components/Navbar'
// import PhotoSlider from './components/Slider'
import CopyWriting from './components/Copywriting'
import Nosotros from './components/Nosotros'

export default function Home ({ children }) {
  return (
    <>
      <Navbar />
      <main>
        <CopyWriting />
        <Nosotros />
        {/* <PhotoSlider /> */}
        {children}
      </main>
    </>
  )
}
