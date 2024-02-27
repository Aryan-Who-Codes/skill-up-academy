import Image from 'next/image'
import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const Navbar = () => {
  return (
    <nav className='flex-center fixed top-0 z-50 w-full border-b-2 border-black-200 bg-black-100 py-7 text-white'>
      <div className='flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16'>
        <Link href="/">
          <Image
            src="/skillUp-logo.svg"
            alt="logo"
            width={55}
            height={40}
          />
        </Link>

        {/* Mobile Navbar */}
        <Popover>
          <PopoverTrigger className='inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 h-10 px-4 py-2 lg:hidden'>
            <Image
              src="/hamburger-menu.svg"
              width={30}
              height={30}
              alt="Hamburger menu"
              className='block md:hidden'
            />
          </PopoverTrigger>
          <PopoverContent className='flex flex-start mt-5 h-fit w-full items-center border-t border-black-300 bg-black-100 py-5 lg:hidden'>
            <ul className='flex flex-start paragraph-semibold w-full flex-col gap-2'>
              <li className='hover:bg-gradient-to-r from-blue-500 to-blue-700 w-full px-6 py-4 xs:px-8'>
                <Link
                  href="https://sam-folio.vercel.app/projects"
                  target="_blank"
                  className='flex items-center gap-2'
                >
                  <Image
                    src="/star.svg"
                    width={30}
                    height={30}
                    alt="Next logo"
                  />
                  Free and Premium Courses
                </Link>
              </li>
              <li className='hover:bg-gradient-to-r from-blue-500 to-blue-700 w-full px-6 py-4 xs:px-8'>
                <Link
                  href="https://github.com/Aryan-Who-Codes?tab=repositories"
                  target="_blank"
                  className='flex items-center gap-2'
                >
                  <Image
                    src="/github.svg"
                    alt="resources icon"
                    width={30}
                    height={30}
                  />
                  Free Projects on Github
                </Link>
              </li>
              <li className='hover:bg-gradient-to-r from-blue-500 to-blue-700 w-full px-6 py-4 xs:px-8'>
                <Link
                  href="https://t.me/+pEcOeVAWkQgzZmVl"
                  target="_blank"
                  className='flex items-center gap-2'
                >
                  <Image
                    src="/blog.svg"
                    alt="blog icon"
                    width={30}
                    height={30}
                  />
                  Blog
                </Link>
              </li>
              <li className='hover:bg-gradient-to-r from-blue-500 to-blue-700 w-full px-6 py-4 xs:px-8'>
                <Link
                  href="/"
                  className='flex items-center gap-2'
                >
                  <Image
                    src="/resources.svg"
                    alt="resources icon"
                    width={30}
                    height={30}
                  />
                  Resources
                </Link>
              </li>
              <li className='hover:bg-gradient-to-r from-blue-500 to-blue-700 w-full px-6 py-4 xs:px-8'>
                <Link
                  href="https://t.me/+pEcOeVAWkQgzZmVl"
                  target="_blank"
                  className='flex items-center gap-2'
                >
                  <Image
                    src="/videos.svg"
                    alt="videos icon"
                    width={30}
                    height={30}
                  />
                  Videos
                </Link>
              </li>
              <li className='hover:bg-gradient-to-r from-blue-500 to-blue-700 w-full px-6 py-4 xs:px-8'>
                <Link
                  href="https://t.me/+pEcOeVAWkQgzZmVl"
                  target="_blank"
                  className='flex items-center gap-2'
                >
                  <Image
                    src="/telegram.svg"
                    alt="telegram icon"
                    width={30}
                    height={30}
                  />
                  Telegram
                </Link>
              </li>
            </ul>
          </PopoverContent>
        </Popover>

        {/* Navbar */}
        <ul className='flex-center gap-x-3 max-md:hidden md:gap-x-10'>
          <li className='body-text text-gradient_blue-purple !font-bold'>
            <Link
              href="https://sam-folio.vercel.app/projects"
              target="_blank"
            >
              Free and Premium Courses
            </Link>
          </li>
          <li className='body-text !font-normal'>
            <Link
              href="https://github.com/Aryan-Who-Codes?tab=repositories"
              target="_blank"
            >
              Free Projects on Github
            </Link>
          </li>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Image
                src="/hamburger-menu.svg"
                width={30}
                height={30}
                alt="Hamburger menu"
              // className='block md:hidden'
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="z-50 overflow-hidden p-1 text-slate-950 shadow-md dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50 mt-5 min-w-[182px] space-y-2 rounded-[5px] border border-black-400 bg-black-300 px-0 py-5 font-poppins">
              <Link href="https://t.me/+pEcOeVAWkQgzZmVl" target="_blank">
                <DropdownMenuItem className='relative flex select-none items-center rounded-sm text-sm outline-none transition-colors dark:focus:bg-slate-800 dark:focus:text-slate-50 body-regular hover:bg-gradient-to-r from-blue-500 to-blue-700 cursor-pointer gap-2 px-5 py-2 focus:bg-black-300 focus:text-white-800 gradient-blue text-white'>
                  <Image
                    src="/blog.svg"
                    alt="blog icon"
                    width={30}
                    height={30}
                  />
                  Blog
                </DropdownMenuItem>
              </Link>
              <Link href="/">
                <DropdownMenuItem className='relative flex select-none items-center rounded-sm text-sm outline-none transition-colors dark:focus:bg-slate-800 dark:focus:text-slate-50 body-regular hover:bg-gradient-to-r from-blue-500 to-blue-700 cursor-pointer gap-2 px-5 py-2 focus:bg-black-300 focus:text-white-800 gradient-blue text-white'>
                  <Image
                    src="/resources.svg"
                    alt="resources icon"
                    width={30}
                    height={30}
                  />
                  Resources
                </DropdownMenuItem>
              </Link>
              <Link href="https://t.me/+pEcOeVAWkQgzZmVl" target="_blank">
                <DropdownMenuItem className='relative flex select-none items-center rounded-sm text-sm outline-none transition-colors dark:focus:bg-slate-800 dark:focus:text-slate-50 body-regular hover:bg-gradient-to-r from-blue-500 to-blue-700 cursor-pointer gap-2 px-5 py-2 focus:bg-black-300 focus:text-white-800 gradient-blue text-white'>
                  <Image
                    src="/videos.svg"
                    alt="videos icon"
                    width={30}
                    height={30}
                  />
                  Videos
                </DropdownMenuItem>
              </Link>
              <Link href="https://t.me/+pEcOeVAWkQgzZmVl" target="_blank">
                <DropdownMenuItem className='relative flex select-none items-center rounded-sm text-sm outline-none transition-colors dark:focus:bg-slate-800 dark:focus:text-slate-50 body-regular hover:bg-gradient-to-r from-blue-500 to-blue-700 cursor-pointer gap-2 px-5 py-2 focus:bg-black-300 focus:text-white-800 gradient-blue text-white'>
                  <Image
                    src="/telegram.svg"
                    alt="telegram icon"
                    width={30}
                    height={30}
                  />
                  Telegram
                </DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </ul>

      </div>
    </nav>
  )
}

export default Navbar
