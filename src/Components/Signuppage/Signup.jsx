import React from 'react'
import './signup.css'
import Loginpage from '../Loginpage/Loginpage'



const Signup = ({onAuth}) => {
        const Loginpage = (e) =>{
                e.preventDefault()
                console.log("Click")
                onAuth()
        }
  return (
    <div className='flex'>
                    <div className='signup'>
                            <img  className='img1'  src='images/logoinsta.png'/>
                                         <h2>Sign up to see photos and videos from your friends.</h2>
                                                <button>
                                                        <img src='/images/fb.png' width={20}/>
                                                                 Log in with facebook
                                                </button>
                                                 
                                                 <fieldset >
                                                <legend>OR</legend>
                                                 <div><input type='text' placeholder='Mobile Number or Email' /></div>
                                                 <div> <input type='text' placeholder='Full Name' /></div>
                                                 <div><input type='text' placeholder='Username'/></div>
                                                 <div><input type='Password' placeholder='passoword'/></div>
                                                 </fieldset>
                                                      
                                                       
                                                         
                                                        
                                                            <div className='text'>
                                                                    <p className='text1'>
                                                                          people who use our service may have uploaded your contact information to instagram.
                                                                                   <span className='spam'>
                                                                                        learn more
                                                                                    </span>
                                                                     </p>
                                                                    <p className='text1'>
                                                                          By signing up, You agree to our <span className='spam'>
                                                                         Terms, Privacy, Policy and Cookies Policy.
                                                                                 </span>
                                                                    </p>
                                                             </div>
                                                                <button type='submit'>
                                                                        Sign up
                                                                </button>
                      </div>
                            <div className='sign'>
                                      <h5>Have an account? <span><a href='' onClick={Loginpage}>Log in</a></span> </h5>
                        </div>
      <div className='img9'>
        <p className='ptag'>
            Get the app.

        </p>
        <img src='images/app.png'/>
            <img src='images/play.png'/>
      </div>
    </div>
  )
}

export default Signup
