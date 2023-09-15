'use client';
import { Metadata } from "next";
import "./slidestyle.css"
import Link from "next/link";

export const metadata: Metadata = {
    title: 'Auth',
    description: 'Login de la Pagina',
  }
const Login1 = () => {
    return (
    <html>
        <body>
        <div className='main'>
          <input type="checkbox" id="chk" aria-hidden="true" />
          <div className='signup'>
            <form action="">
              <label htmlFor="chk" aria-hidden="true">Sign up</label>
              <input type="text" name="txt" id="" placeholder='Nombre de Usuario' required/>
              <input type="email" name="email" id="" placeholder='Email' required/>
              <input type="password" name="pswd" id="" placeholder='Contraseña' required/>
              <button>Sign up</button>
            </form>
          </div>
        <div className='login'>
          <form action="">
            <label htmlFor="chk" aria-hidden="true">Login</label>
            <input type="email" name="email" id="" placeholder='Email' required/>
            <input type="password" name="" id="" placeholder='Contraseña' required/>
            <button>Login</button>
          </form>
        </div>
        </div>  
      </body>
    </html>
    )
};

export default Login1;