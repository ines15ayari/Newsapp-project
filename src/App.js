import React from 'react'
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Canada from './Views/Canada/Canada'
import France from './Views/France/France'
import US from './Views/US/US'



function App() {

    return (
    <div>

        <NavBar/>
        <Route path="/France"><France/></Route>
        <Route path="/Canada" ><Canada/></Route>
        <Route path="/US" ><US/></Route>
      
   
           

    </div>
      
      
    )
}
export default App;



