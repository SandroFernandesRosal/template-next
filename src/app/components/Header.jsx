'use client'

import ChangeTheme from './ChangeTheme'
import { AiOutlineClose } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import NavBar from './NavBar'
import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [menu, setMenu] = useState(false)

  const handleMenu = () => {
    menu === false ? setMenu(true) : setMenu(false)
  }

  return (
    <>
      <header className="font-Roboto fixed z-30 flex h-20 w-[100vw]  items-center justify-evenly overflow-hidden border-b-2 border-solid border-y-black  bg-blue-300 text-white dark:border-y-white dark:bg-black">
        <Link href="/">
          <div>Logo</div>
        </Link>

        <ChangeTheme />
        <NavBar />
        <div
          onClick={handleMenu}
          className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full  border-[2px] border-white hover:bg-pink-300  dark:hover:bg-gray-800 md:hidden"
        >
          {menu === false ? (
            <GiHamburgerMenu className="text-[22px] text-white" />
          ) : (
            <AiOutlineClose className="text-[25px]  text-white" />
          )}
        </div>
      </header>

      {menu && <NavBar handleMenu={handleMenu} menu={menu} />}
    </>
  )
}
