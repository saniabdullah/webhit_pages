import {defineField, defineType} from 'sanity'
import {AiOutlineUsergroupAdd as icon} from 'react-icons/ai'


export default defineType({
  name: 'clients',
  title: 'Clients',
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
