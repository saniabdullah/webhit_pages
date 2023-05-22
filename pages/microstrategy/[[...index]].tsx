import React from 'react'
import { Poppins } from 'next/font/google'
import { client } from '../../lib/sanity.client'
import { groq } from 'next-sanity'
import NavbarSecond from '../../components/navbar_second'
import Footer from '../../components/footer'
import MicrostrategyPage from '../../components/microstrategy_page'


const font = Poppins({
  subsets: ['latin'],
  weight: '400'
})



const Home = ({carousel_micro} : any) => {
  return (
    <main className={`flex min-h-screen bg-white flex-col items-center justify-between text-[#204E62] ${font.className}`}>
      <NavbarSecond />
      <MicrostrategyPage data={carousel_micro}/>
      <Footer />
    </main>
  )
}

export const getServerSideProps = async () => {
  const query_carousel_micro = groq`
    *[_type == "carousel_micro"] {
      title,
      desc,
      "imgurl": image.asset->url
    }
  `

const carousel_micro = await client.fetch(query_carousel_micro);

  return {
    props: { carousel_micro }
  }
}

export default Home