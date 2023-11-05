'use client'
import Foto1 from '../../../public/assets/Dronena_files/01022023_021128.jpg'
import Foto2 from '../../../public/assets/Dronena_files/01062023_071046.jpg'
import Foto3 from '../../../public/assets/Dronena_files/01062023_072301.jpg'
import React, { useEffect, useState } from 'react'
import styles from '../styles/Slider.css'
import Image from 'next/image'

export default function PhotoSlider () {
  const [slideIndex, setSlideIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % 3)
    }, 2000)

    return () => clearTimeout(timer)
  }, [slideIndex])

  return (
    <div>
      {/* <h2>Automatic Slideshow</h2>
      <p>Change image every 2 seconds:</p> */}

      <div className={styles.slideshowContainer}>
        <div className={`${styles.mySlides} ${styles.fade}`} style={{ display: slideIndex === 0 ? 'block' : 'none' }}>
          <div className={styles.numbertext}>1 / 3</div>
          <Image alt='foto1' src={Foto1} />
          <div className={styles.text}>Caption Text</div>
        </div>

        <div className={`${styles.mySlides} ${styles.fade}`} style={{ display: slideIndex === 1 ? 'block' : 'none' }}>
          <div className={styles.numbertext}>2 / 3</div>
          <Image alt='foto2' src={Foto2} />
          <div className={styles.text}>Caption Two</div>
        </div>

        <div className={`${styles.mySlides} ${styles.fade}`} style={{ display: slideIndex === 2 ? 'block' : 'none' }}>
          <div className={styles.numbertext}>3 / 3</div>
          <Image alt='foto3' src={Foto3} />
          <div className={styles.text}>Caption Three</div>
        </div>
      </div>

      <br />

      <div>
        <span className='dot' />
        <span className='dot' />
        <span className='dot' />
      </div>
    </div>
  )
}
