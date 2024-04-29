import React from 'react'
import Menu from './Menu'

function Header() {
   return (
      <header className='w-full bg-red-200 p-4 font-bold text-xl text-center'>
         <Menu />
         <h1>Main Header of project</h1>
      </header>
   )
}

export default Header