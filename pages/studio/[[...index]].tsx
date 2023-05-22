import Head from 'next/head'
import { NextStudio } from 'next-sanity/studio'
import config from '../../sanity.config'

export default function StudioPage() {
  return (
    <>
      <NextStudio config={config} />
    </>
  )
}