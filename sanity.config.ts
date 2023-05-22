import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
//import {googleMapsInput} from '@sanity/google-maps-input'
import { schemaTypes } from './schemas'
import StudioNavbar from './components/studioNavbar';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: "/studio",
  name: 'website_hit',
  title: 'Website Hit',

  projectId,
  dataset,

  plugins: [
    deskTool(),
    visionTool(),
    //googleMapsInput(),
  ],
  studio: {
    components: {
      navbar: StudioNavbar
    }
  },
  schema: {
    types: schemaTypes,
  },
})
