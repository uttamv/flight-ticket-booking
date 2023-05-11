import React, { useEffect, useState } from "react";
import { flightData } from "./flightData";
import "./styles.css";

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
    console.log(seatAdded);
    console.log("calling");
  }

  console.log(availableFlights);
  return (
    <>
      <div className="Parent">
        {availableFlights.map((flight, i) => {
          return (
            <div className="Child">
              <h3>{flight.name}</h3>
              <span>
                <button onClick={() => setSeatAdded(seatAdded - 1)}>-</button>
                <input type="text" value={seatAdded} />
                <button onClick={() => setSeatAdded(seatAdded + 1)}>+</button>
              </span>
              <p>{`Seat Left: ${flight.totalSeat - flight.seatBooked}`}</p>
              <button onClick={() => bookTicket(i)}>Book Now</button>
            </div>
          );
        })}
      </div>
    </>
  );
}
