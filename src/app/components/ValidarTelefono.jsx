'use client'
import React, { useState } from 'react'

const ValidarTelefono = () => {
  const [phoneNumber, setPhoneNumber] = useState('')

  const handleInputChange = (e) => {
    const input = e.target.value
    const regex = /^[0-9]+$/

    if (regex.test(input)) {
      setPhoneNumber(input)
    } else {
      setPhoneNumber('')
    }
  }

  return (
    <input className='input' value={phoneNumber} id='telefono' onChange={handleInputChange} type='text' name='telefono' placeholder='' />
  )
}

export default ValidarTelefono
