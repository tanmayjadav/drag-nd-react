import React from 'react'
import { Toaster } from 'sonner'
import { ModeToggle } from './ModeToggle'
import { Button } from './ui/button'

const Header = () => {
  return (
    <>
    <header className=" top-0 bg-gray-300 z-50 shadow-[0_17px_17px_-25px_rgba(0,0,0,0.3)] dark:shadow-[0_17px_17px_-25px_rgba(255,255,255,0.4)] w-screen pl-3 md:pl-8 pr-3 md:pr-8 flex justify-end items-center">
        <div className='w-2/5 justify-end px-2 flex flex-row items-center'>
        <div className="text-lg  font-bold px-4 py-2">
          <Button>
            Save Changes
          </Button>
        </div>
          <ModeToggle/>
        </div>
      </header>
      <Toaster richColors position="bottom-left" />
  </>
  )
}

export default Header
