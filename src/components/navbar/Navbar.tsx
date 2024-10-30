'use client'
import { linksData } from './data'
import Link from 'next/link'
import MobileNavbar from './MobileNavbar'
import NavbarItems from './NavbarItems'


const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-4 px-2 lg:px-4'>
        <div className=''  ><Link href='/' className='text-white text-xl font-bold shadow-md border p-2 hover:scale-200  transition-all'>Logo</Link></div>
        <div className='lg:hidden'>
            <MobileNavbar />
        </div>
        <div>
          <NavbarItems />
        </div>
        
    </div>
  )
}

export default Navbar