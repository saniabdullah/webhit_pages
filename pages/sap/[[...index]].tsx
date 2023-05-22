import React from 'react'
import { Poppins } from 'next/font/google'
import { client } from '../../lib/sanity.client'
import { groq } from 'next-sanity'
import CarouselSap from '../../components/sap_page'
import SecoundSectionSapPage from '../../components/sap_second_page'
import NavbarSecond from '../../components/navbar_second'
import Footer from '../../components/footer'


const font = Poppins({
  subsets: ['latin'],
  weight: '400'
})



const Home = ({carousel_sap, item_sap} : any) => {
  return (
    <main className={`flex min-h-screen bg-white flex-col items-center justify-between text-[#204E62] ${font.className}`}>
      <NavbarSecond />
      <CarouselSap data={carousel_sap} />
      <SecoundSectionSapPage data={item_sap} />
      <Footer />
    </main>
  )
}

export const getServerSideProps = async () => {
  const query_carousel_sap = groq`
    *[_type == "carousel_sap"] {
      title,
      desc,
      "imgurl": image.asset->url
    }
  `

  const query_item_sap = groq`
    *[_type == "item_sap"] {
      title,
      desc,
      "imgurl": image.asset->url
    }
  `

const carousel_sap = await client.fetch(query_carousel_sap);
const item_sap = await client.fetch(query_item_sap);

  return {
    props: { carousel_sap, item_sap }
  }
}

export default Home