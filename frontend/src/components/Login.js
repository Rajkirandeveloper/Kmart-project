import React from 'react'

const Login = () => {
  return (
    <div>
        <form>
            <h1>Login Here</h1>
            <input type="password" name="password" placeholder='password'/> <br/>
            
            <input type="email" name="email" placeholder='email'/> <br/>
            
            <input type="submit" valu="submit"/>
        </form>

    </div>
  )
}

export default Login