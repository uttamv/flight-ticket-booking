import React from 'react'
import SelectLocation from "./SelectLocation";
import { Heading } from '@chakra-ui/react'
import "./styles.css";
import UserRegistration from "./UserRegistration";

function User() {
  return (
    <div>
    <Heading>User</Heading>
    <Heading m={10}>Soptle Flight</Heading>
    <div className="container">
      <SelectLocation />
    </div></div>
  )
}

export default User