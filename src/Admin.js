import React from 'react'
import { Heading } from '@chakra-ui/react';

var flightDataInAdmin ; 

export function fData(flightData){
    console.log(flightData)
    flightDataInAdmin = flightData
}

function Admin() {

    console.log(flightDataInAdmin)
  return (
    <>
    <Heading>Admin</Heading>
     <div className="Parent">
        {flightDataInAdmin?.map((flight, key=i) => {
            if(flight.seatBooked>0){
          return (
            <div className="Child">
              <Heading size='sm'>{flight.name}</Heading>
              <p>{`Seat Booked: ${flight.seatBooked}`}</p>
            </div>
          );}
        })}
      </div>
    </>
  )
}

export default Admin