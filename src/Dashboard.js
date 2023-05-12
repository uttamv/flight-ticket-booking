import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Container } from '@chakra-ui/react'
import UserRegistration from './UserRegistration'
import UserSignIn from './UserSignIn'

function Dashboard() {
  const navigate = useNavigate()
  return (
    <Container>
      <Button mx={5} onClick={()=>navigate('/')} mt={10}>Home</Button>
      <UserRegistration />
      <UserSignIn />
    </Container>
  )
}

export default Dashboard