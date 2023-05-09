import React from 'react'
import './Style.css'
const Loginpage = ({onAuth}) => {
        const signUp = (e) =>{
                e.preventDefault()
                console.log("Click")
                onAuth()
        }
  return (
    <div className='nin'>
                <div className='login1'>
                    <div className='img1'>
                            <img src='./images/rez.svg' className='img1'/>
                     </div>
                         <div className='sec'>
                             <div className='one'>
                                    <form>
                                   
                                        <img src='./images/logoinsta.png' className='img2'/>
                                            <div>
                                                    <input type="text" placeholder='E-mail username and phone no' />
                                            </div>
                                            <div>
                                                     <input type="password" placeholder='Password' />
                                            </div>
                                            <button>Log in</button>
                                            
                                            <div className='border'>
                                            <fieldset>
                                           
                                                <legend>OR</legend>
                                          
                                                </fieldset>
                                            </div>
                                            
                                            <div className='sus'>
                                                <img src='./images/fb.png' className='img3'/>
                                                         <h5>Log in with facebook</h5>
          
                                             </div>
                                            <div className='pal'>
                                                    <p>Forgot password?</p>
                                            </div>
                                     </form>
                                </div>
                                        <div className='nil'>
                                            <div className='sed'>
                                                    <p>Don't have an account?<span><a href='' onClick={signUp}>Sign up</a></span></p>
                                            </div>
                                             <div className='sewn'>
                                                    <p>Get the app</p>
                                                    <div className='six'>
                                                                <img src='./images/play.png' className='img5'/>
                                                                <img src='./images/app.png' className='img5'/>
                                                    </div>
                                            </div>
                                            </div>
                        </div>
      
                </div>
    </div>
  )
}

export default Loginpage
