import React from 'react'
import Header from './Header'
import { LOGIN_BACKGROUND_SRC, LOGIN_BACKGROUND_SRCSET } from '../utils/constants'

const Login = () => {
    return (
        <div className='w-screen h-screen'>
            <Header />
            <img alt="Login Background" src={LOGIN_BACKGROUND_SRC} srcSet={LOGIN_BACKGROUND_SRCSET} className='w-full h-full object-cover'></img>
        </div>
    )
}

export default Login