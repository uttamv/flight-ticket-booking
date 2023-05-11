import React, { useState } from "react";
import ShowFlights from "./ShowFlights";

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
    <div className="container">
      <select onChange={locationHandler}>
        <option value="none" selected disabled hidden>
          Select an Option
        </option>
        {fromlocation.map((loc, i) => (
          <option value={loc}>{loc}</option>
        ))}
      </select>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <select onChange={(e) => setTo(e.target.value)}>
        <option value="none" selected disabled hidden>
          Select an Option
        </option>
        {fromlocation.map((loc, i) => {
          if (loc !== from) {
            return <option value={loc}>{loc}</option>;
          }
        })}
      </select>
      <br />
      <br />
      {/* button to search flights */}
      <button onClick={() => setShowFlight(true)}>Search</button>
      <br />
      <br />
      {showFlight && <ShowFlights to={to} from={from} />}
    </div>
  );
}
