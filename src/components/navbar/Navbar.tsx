import React from 'react'
import { linksData } from './data'
import Link from 'next/link'
import MobileNavbar from './MobileNavbar'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-4'>
        <div>Logo</div>
        <div className='lg:hidden'>
            <MobileNavbar />
        </div>
        <div className='hidden lg:flex'>
            { linksData.map((link) => (
                <Link href={link.path} key={link.title}>{ link.title}</Link>
            ))}
        </div>
    </div>
  )
}

export default Navbar