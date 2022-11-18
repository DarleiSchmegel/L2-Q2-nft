import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`md:hidden  absolute top-20 left-0 h-screen w-screen bg-gray-700 transform ${
        open ? '-translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out filter drop-shadow-md z-40 `}
    >
      <nav className="pt-5" aria-label="Site Nav">
        <ul className="flex flex-col items-center gap-6 text-basep">
          <li>
            <Link href="/">
              <a
                className="text-gray-500 font-bold transition hover:text-gray-500/75"
                onClick={() =>
                  setTimeout(() => {
                    setOpen(!open);
                  }, 100)
                }
              >
                Auctions
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a
                className="text-gray-500 font-bold transition hover:text-gray-500/75"
                onClick={() =>
                  setTimeout(() => {
                    setOpen(!open);
                  }, 100)
                }
              >
                Roadmap
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a
                className="text-gray-500 font-bold transition hover:text-gray-500/75"
                onClick={() =>
                  setTimeout(() => {
                    setOpen(!open);
                  }, 100)
                }
              >
                Discover
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a
                className="text-gray-500 font-bold transition hover:text-gray-500/75"
                onClick={() =>
                  setTimeout(() => {
                    setOpen(!open);
                  }, 100)
                }
              >
                Community
              </a>
            </Link>
          </li>

          <li>
            <div className="sm:hidden ">
              <Link href="/">
                <a className="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white">
                  My account
                </a>
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header aria-label="Site Header" className="bg-gray-700 ">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className={`flex h-20 items-center justify-between `}>
          <div className="md:flex md:items-center md:gap-12">
            <Link href="/">
              <a className="block">
                <span className="sr-only">Home</span>
                <Image src="/images/Sygnet.png" height={35} width={35} />
              </a>
            </Link>
          </div>

          <div className={`hidden md:block`}>
            <nav aria-label="Site Nav">
              <ul className="flex items-center gap-6 text-base">
                <li>
                  <Link href="/">
                    <a className="text-gray-500 font-bold transition hover:text-gray-500/75">
                      Auctions
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className="text-gray-500 font-bold transition hover:text-gray-500/75">
                      Roadmap
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className="text-gray-500 font-bold transition hover:text-gray-500/75">
                      Discover
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className="text-gray-500 font-bold transition hover:text-gray-500/75">
                      Community
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <Link href="/">
                <a className="rounded-md border-2 border-gray-500 px-5 py-2.5 text-sm font-medium text-gray-500 shadow">
                  Contact
                </a>
              </Link>

              <div className="hidden sm:flex">
                <Link href="/">
                  <a className="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white">
                    My account
                  </a>
                </Link>
              </div>
            </div>

            <div className="block md:hidden">
              <button
                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                onClick={() => setOpen(!open)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <MobileNav open={open} setOpen={setOpen} />
    </header>
  );
}
