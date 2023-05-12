import React, { useState } from "react";
import ShowFlights from "./ShowFlights";
import {
  Select,
  Button,
  Container,
} from "@chakra-ui/react";

export default function SelectLocation() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [showFlight, setShowFlight] = useState(false);

  const fromlocation = ["Delhi", "Chennai", "Allahabad", "mumbai"];
  function locationHandler(e) {
    setFrom(e.target.value);
    setShowFlight(false);
  }
  return (
    <Container>
      <Select onChange={locationHandler} placeholder='Select Departure'  bg='tomato'>
        {fromlocation.map((loc, i) => (
          <option value={loc}>{loc}</option>
        ))}
      </Select>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Select onChange={(e) => setTo(e.target.value)} placeholder='Select Destination'  bg='green'>
        {fromlocation.map((loc, i) => {
          if (loc !== from) {
            return <option value={loc}>{loc}</option>;
          }
        })}
      </Select>
      <br />
      <br />
      {/* button to search flights */}
      <Button onClick={() => setShowFlight(true)}>Search</Button>
      <br />
      <br />
      {showFlight && <ShowFlights to={to} from={from} />}
    </Container>
  );
}
