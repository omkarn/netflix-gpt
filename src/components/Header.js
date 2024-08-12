import React from 'react'
import netflixLogo from '../assets/images/NetflixLogo.png'

const Header = () => {
    return (
        <div className='absolute w-full bg-gradient-to-b from-black flex justify-between items-center px-44 py-2'>
            <img src={netflixLogo} alt='Netflix Logo' className=' w-[180px]' />
            <button className='w-20 h-8 bg-red-700 rounded-md font-semibold text-base hover:bg-red-800'>Sign In</button>
        </div>
    )
}

export default Header