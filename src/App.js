import React, { useState } from 'react'
import Loginpage from './Components/Loginpage/Loginpage'
import Signup from './Components/Signuppage/Signup'

const App = () => {
    const [authenticated, setAuthenticated] = useState(true)
    function authorise(){
      
      setAuthenticated(!authenticated)
    }
    
  return (<div>
  
      
         
         {authenticated ?
         <Loginpage onAuth={authorise}/>
         :
         <Signup onAuth={authorise}/> 
          }
       
      
   
    </div>)
  
  
        

    
}

export default App
