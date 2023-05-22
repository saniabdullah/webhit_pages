'use client'

import Image from "next/image";
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Poppins } from 'next/font/google'
import Link from 'next/link'


const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/' },
  { name: 'Product', href: '/' },
  { name: 'Career', href: '/' },
]

const font = Poppins({
  subsets: ['latin'],
  weight: '600'
})

export default function NavbarSecond () {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className={font.className}>
      <div className="bg-white">
          <header className="fixed bg-white shadow-sm md:shadow-md inset-x-0 top-0 z-50">
            <nav className="flex items-center justify-between p-1 lg:px-24" aria-label="Global">
              <div className="flex lg:flex-1">
                <Link href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-16 w-auto"
                    src="./images/logo_besar.png"
                    alt=""
                    width={50}
                    height={50}
                  />
                </Link>
              </div>
              <div className="flex lg:hidden">
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#204E62]"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="hidden lg:flex lg:gap-x-12">
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href} className="text-sm font-bold leading-6 text-[#204E62] hover:text-black">
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <Link href="/" className="bg-[#204E62] text-sm font-bold leading-6 text-white py-2 px-4 rounded-md shadow-lg hover:bg-[#405a54]">
                  Free Consulting
                </Link>
              </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
              <div className="fixed inset-0 z-50" />
              <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                  <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <img
                      className="h-16 w-auto"
                      src="./images/logo.png"
                      alt=""
                      width={50}
                      height={50}
                    />
                  </a>
                  <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Dialog>
        </header>
      </div>
    </div>
  );
}