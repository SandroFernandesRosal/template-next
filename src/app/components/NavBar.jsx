import Link from 'next/link'

export default function NavBar({ handleMenu, menu }) {
  return (
    <nav
      className={`fixed z-20 md:static ${
        menu === true ? 'flex' : 'hidden'
      }  md:bg- font-Roboto h-[100vh] w-[100vw] flex-col items-center justify-center gap-10 bg-gray-300 font-bold dark:bg-black md:flex md:h-auto md:w-auto md:flex-row md:gap-1 md:bg-transparent`}
    >
      <Link
        href="/sobre"
        className="border-b-2 border-solid border-blue-300 p-2 text-3xl hover:text-blue-300 md:border-b-0 md:text-sm md:hover:border-b-2 md:hover:border-b-white md:hover:text-white"
        onClick={handleMenu}
      >
        Sobre
      </Link>

      <Link
        href="/servicos"
        className="border-b-2 border-solid border-blue-300 p-2 text-3xl hover:text-blue-300 md:border-b-0 md:text-sm md:hover:border-b-2 md:hover:border-b-white md:hover:text-white"
        onClick={handleMenu}
      >
        Serviços
      </Link>

      <Link
        href="/contato"
        className="border-b-2 border-solid border-blue-300 p-2 text-3xl hover:text-blue-300 md:border-b-0 md:text-sm md:hover:border-b-2 md:hover:border-b-white md:hover:text-white"
        onClick={handleMenu}
      >
        Contato
      </Link>
    </nav>
  )
}
