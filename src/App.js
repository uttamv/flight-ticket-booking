import Admin from "./Admin";
import SelectLocation from "./SelectLocation";
import "./styles.css";
import UserRegistration from "./UserRegistration";
import { ChakraProvider, Heading, Button } from '@chakra-ui/react'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import User from "./User";
import Dashboard from "./Dashboard";

export default function App() {
  return (
    <Router>
    <ChakraProvider>
    <div className="App" mg={5} size='lg'>
    <Dashboard />
      <Routes>
                 <Route exact path='/admin' element={< Admin />}></Route>
                 <Route exact path='/user' element={< User />}></Route>
          </Routes>
    </div></ChakraProvider></Router>
  );
}
