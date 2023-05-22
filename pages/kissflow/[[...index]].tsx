import React from 'react'
import { Poppins } from 'next/font/google'
import { client } from '../../lib/sanity.client'
import { groq } from 'next-sanity'
import NavbarSecond from '../../components/navbar_second'
import Footer from '../../components/footer'
import KissflowPage from '../../components/kissflow_page'
import KissflowSecondPage from '../../components/kissflow_second_page'


const font = Poppins({
  subsets: ['latin'],
  weight: '400'
})



const Home = ({carousel_kissflow, item_kissflow} : any) => {
  return (
    <main className={`flex min-h-screen bg-white flex-col items-center justify-between text-[#204E62] ${font.className}`}>
      <NavbarSecond />
      <KissflowPage data={carousel_kissflow}/>
      <KissflowSecondPage data={item_kissflow}/>
      <Footer />
    </main>
  )
}

export const getServerSideProps = async () => {
  const query_carousel_kissflow = groq`
    *[_type == "carousel_kissflow"] {
      title,
      desc,
      "imgurl": image.asset->url
    }
  `

  const query_item_kissflow = groq`
    *[_type == "item_kissflow"] {
      title,
      desc,
      "imgurl": image.asset->url,
      list
    }
  `

  const carousel_kissflow = await client.fetch(query_carousel_kissflow);
  const item_kissflow = await client.fetch(query_item_kissflow);

  return {
    props: { carousel_kissflow, item_kissflow }
  }
}

export default Home