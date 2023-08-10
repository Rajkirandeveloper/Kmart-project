import React from 'react'

const Register = () => {
  return (
    <div>
        <form>
          <h1>Register Here</h1>
            <input type="text" name="name" placeholder='name'/> <br/>
            <input type="password" name="password" placeholder='password'/> <br/>
            <input type="confirmpassword" name="confirmpassword" placeholder='confirmpassword'/>
            <br/>
              <input type="email" name="email" placeholder='email'/>
            
            <input type="submit" valu="submit"/>
        </form>
       

    </div>
  )
}

export default Register