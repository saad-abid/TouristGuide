import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import ImageCollage from '../components/ImageCollage'

function Tour() {
  return (
    <Container sx={{widht: 900}}>
      <Typography variant="h3" component="h1" marginTop={3}>Explore the wrokd</Typography>
      <Box marginTop={3} sx={{display: 'flex'}}>
        <img src="https://picsum.photos/1000/600" alt="img"  height={350}  />
        <ImageCollage/>
      </Box>
    </Container>
  )
}

export default Tour