import React from 'react'
import Carousel from '../components/carousel'
import { Poppins } from 'next/font/google'
import { client } from '../lib/sanity.client'
import { groq } from 'next-sanity'


const font = Poppins({
  subsets: ['latin'],
  weight: '400'
})

const carousel_data = [
  {imgurl: "./images/image1.png", title: "Make IT Simple", desc: "End to end solution for digitizing business processes easily"},
  {imgurl: "./images/image2.png", title: "Software Development", desc: "We are proud of our experience on custom software development for various industries, and our clients mainly from mining industries in Indonesia."},
  {imgurl: "./images/image3.png", title: "IT Infrastructure", desc: "More than 10 years of experience managing infrastructure projects: internet network, server, CCTV"},
];


const Home = ({carousel} : any) => {
  console.log('data', carousel)
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between text-[#204E62] ${font.className}`}>
        <Carousel data={carousel}/>
    </main>
  )
}

export const getServerSideProps = async () => {
  const query_carousel = groq`
    *[_type == "carousel"] {
      title,
      desc,
      "imgurl": image.asset->url
    }
  `
  const carousel = await client.fetch(query_carousel);

  return {
    props: { carousel}
  }
}

export default Home