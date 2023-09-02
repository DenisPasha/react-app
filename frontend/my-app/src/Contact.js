import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Contact() {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/')
    }
  return (
    <div>
        Contact
        <Button variant='contained' onClick={handleClick}>Home</Button>
    </div>
  )
}
