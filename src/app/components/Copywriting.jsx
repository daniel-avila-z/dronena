import Image from 'next/image'
// import mockup from '../../../public/assets/mockups/mockup-6.png'
import mockup from '../../../public/assets/mockups/circ.png'
import '../styles/Copywriting.css'

export default function CopyWriting () {
  return (
    <header>
      <section className='copy-main-container'>
        <div className='copy-container'>
          <h1 className='copywriting'>Distribuimos  <span className='copyspan'>salud</span> y <span className='copyspan'>bienestar</span> con <span className='copyspan'>calidad</span></h1>
        </div>
        <Image alt='imagen principal' src={mockup} className='image-copy' />
      </section>
    </header>

  )
}
