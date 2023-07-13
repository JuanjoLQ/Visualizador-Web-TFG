import React from 'react'
import Card from 'react-bootstrap/Card'

import '../css/SimpleInfoCard.css'

function SimpleInfoCard({ title, text = 'texto de ejemplo' }) {
  return (
    <Card className='card-background text-light radius h-auto w-auto rounded-2'>
      <Card.Body>
        <Card.Title className='card-title text-center fw-bold'>{title}</Card.Title>
        <Card.Text className='card-body-text text-center fw-bold fs-6'>
          {text}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default SimpleInfoCard