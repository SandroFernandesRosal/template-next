import Socials from './Socials'

export default function Footer() {
  return (
    <footer className="flex h-[100px] flex-col items-center justify-evenly border-t-2 border-solid border-y-black bg-blue-300  font-bold text-white dark:border-y-white dark:bg-black ">
      <p>Footer do site</p>

      <Socials className="cor" />
    </footer>
  )
}
