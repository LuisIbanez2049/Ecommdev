import React from 'react'

function NavBar() {
  return (
    <div className='w-full flex flex-row justify-center gap-10 p-4 sticky top-0 bg-[orange]'>
        <a href="#uno">Uno</a>
        <a href="#dos">Dos</a>
        <a href="#tres">Tres</a>
    </div>
  )
}

export default NavBar