import React from 'react'
import Carousel from '../components/carousel'
import { Poppins } from 'next/font/google'
import { client } from '../lib/sanity.client'
import { groq } from 'next-sanity'
import Navbar from '../components/navbar'
import Service from '../components/service'
import Client from '../components/client'
import Partnership from '../components/partnership'
import Industries from '../components/industries'
import Product from '../components/product'
import Partners from '../components/partners'
import Gallery from '../components/gallery'
import Contact from '../components/contact'
import Footer from '../components/footer'


const font = Poppins({
  subsets: ['latin'],
  weight: '400'
})



const Home = ({carousel, services, clients, partnership, product, partner, gallery} : any) => {
  console.log('data', services)
  return (
    <main className={`flex min-h-screen bg-white flex-col items-center justify-between text-[#204E62] ${font.className}`}>
        <Navbar />
        <Carousel data={carousel}/>
        <Service data={services}/>
        <Client data={clients}/>
        <Partnership data={partnership}/>
        <Industries />
        <Product data={product}/>
        <Partners data={partner}/>
        <Gallery data={gallery}/>
        <Contact />
        <Footer />
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
  const query_services = groq`
    *[_type == "services"] {
      title,
      desc,
      "img_url": image.asset->url
    }
  `

  const query_client = groq`
    *[_type == "clients"] {
      "img_client": image.asset->url
    }
  `

  const query_partnership = groq`
    *[_type == "partnership"] {
      "img_parthership": image.asset->url
    }
  `

  const query_product = groq`
    *[_type == "product"] {
      title,
      desc,
      sub_title,
      "imgurl": image.asset->url
    }
  `

  const query_partner = groq`
    *[_type == "partner"] {
      desc,
      "img_url": image.asset->url
    }
  `

  const query_gallery = groq`
    *[_type == "gallery"] {
      "imgurl": image.asset->url
    }
  `

  const carousel = await client.fetch(query_carousel);
  const services = await client.fetch(query_services);
  const clients = await client.fetch(query_client);
  const partnership = await client.fetch(query_partnership);
  const product = await client.fetch(query_product);
  const partner = await client.fetch(query_partner);
  const gallery = await client.fetch(query_gallery);

  return {
    props: { carousel, services, clients, partnership, product, partner, gallery }
  }
}

export default Home