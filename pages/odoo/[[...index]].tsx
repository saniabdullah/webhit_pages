import React from 'react'
import { Poppins } from 'next/font/google'
import { client } from '../../lib/sanity.client'
import { groq } from 'next-sanity'
import CarouselSap from '../../components/sap_page'
import SecoundSectionSapPage from '../../components/sap_second_page'
import NavbarSecond from '../../components/navbar_second'
import Footer from '../../components/footer'
import OdooSecondPage from '../../components/odoo_second_page'
import OdooPage from '../../components/odoo_page'


const font = Poppins({
  subsets: ['latin'],
  weight: '400'
})



const Home = ({carousel_odoo} : any) => {
  return (
    <main className={`flex min-h-screen bg-white flex-col items-center justify-between text-[#204E62] ${font.className}`}>
      <NavbarSecond />
      <OdooPage data={carousel_odoo}/>
      <OdooSecondPage />
      <Footer />
    </main>
  )
}

export const getServerSideProps = async () => {
  const query_carousel_odoo= groq`
    *[_type == "carousel_odoo"] {
      title,
      desc,
      "imgurl": image.asset->url
    }
  `

const carousel_odoo = await client.fetch(query_carousel_odoo);

  return {
    props: { carousel_odoo }
  }
}

export default Home