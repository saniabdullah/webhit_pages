import {defineField, defineType} from 'sanity'
import {BiPhotoAlbum as icon} from 'react-icons/bi'


export default defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {media: 'image'},
  },
})
