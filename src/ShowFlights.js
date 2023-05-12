import React, { useEffect, useState } from "react";
import { flightData } from "./flightData";
import { fData } from "./Admin";
import "./styles.css";
import {
  Button,
  Input,
  Heading
} from "@chakra-ui/react";

export default function ShowFlights({ to: destination, from: arrival }) {
  const [seatAdded, setSeatAdded] = useState(0);

  const availableFlight = flightData.filter(
    ({ to, from }) => to === destination && from === arrival
  );

  const [availableFlights, setAvailableFlights] = useState([
    ...availableFlight
  ]);

  function bookTicket(i) {
    let seatBooked = availableFlights[i]["seatBooked"];
    setAvailableFlights(availableFlights);
    setAvailableFlights((prevArray) => {
      const updatedArray = prevArray.map((obj, index) => {
        if (index === i) {
          return { ...obj, seatBooked: seatBooked + seatAdded };
        }
      });
      return updatedArray;
    });

    flightData.forEach((flight,ind) => {
      if(flight.id === availableFlights[i]['id']){
        flight.seatBooked += seatAdded;
      }
    })
    fData(flightData)
    console.log(seatAdded);
    console.log(flightData);
  }

  console.log(availableFlights);
  return (
    <>
      <div className="Parent">
        {availableFlights.map((flight, i) => {
          return (
            <div className="Child">
              <Heading size='sm'>{flight.name}</Heading>
              <span>
                <Button onClick={() => setSeatAdded(seatAdded - 1)}>-</Button>
                <Input type="text" value={seatAdded} width='3rem' mx={2} />
                <Button onClick={() => setSeatAdded(seatAdded + 1)}>+</Button>
              </span>
              <p>{`Seat Left: ${flight.totalSeat - flight.seatBooked}`}</p>
              <Button onClick={() => bookTicket(i)}>Book Now</Button>
            </div>
          );
        })}
      </div>
    </>
  );
}
