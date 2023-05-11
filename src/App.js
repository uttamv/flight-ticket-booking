import SelectLocation from "./SelectLocation";
import "./styles.css";
import UserRegistration from "./UserRegistration";

export default function App() {
  return (
    <div className="App">
      <UserRegistration />
      <h1>Soptle Flight</h1>
      <div className="container">
        <SelectLocation />
      </div>
    </div>
  );
}
