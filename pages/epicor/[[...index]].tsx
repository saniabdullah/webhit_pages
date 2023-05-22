import React from 'react'
import { Poppins } from 'next/font/google'
import { client } from '../../lib/sanity.client'
import { groq } from 'next-sanity'
import NavbarSecond from '../../components/navbar_second'
import Footer from '../../components/footer'
import EpicorSecondPage from '../../components/epicor_second_page'
import EpicorPage from '../../components/epicor_page'


const font = Poppins({
  subsets: ['latin'],
  weight: '400'
})



const Home = () => {
  return (
    <main className={`flex min-h-screen bg-white flex-col items-center justify-between text-[#204E62] ${font.className}`}>
      <NavbarSecond />
      <EpicorPage />
      <EpicorSecondPage />
      <Footer />
    </main>
  )
}

export default Home