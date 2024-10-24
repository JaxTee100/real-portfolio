"use client"
import React, { useState } from 'react'
import { linksData } from './data'
import Link from 'next/link'

const MobileNavbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const openMenuBar = () => {
        setOpenMenu(prev => !prev)
    }
  return (
    <div className='relative'>
        <div className='' onClick={openMenuBar}>
            Menu
        </div>
        { openMenu && 
            <div className='absolute border-2 border-green-700 right-0 p-4 flex flex-col'>
                {linksData.map((link) => (
                <Link href={link.path} key={link.title}> {link.title}</Link>
             ))}
            </div>
            
        }
    </div>
  )
}

export default MobileNavbar