import {defineField, defineType} from 'sanity'
import {AiOutlineUserAdd as icon} from 'react-icons/ai'


export default defineType({
  name: 'partnership',
  title: 'Partnership',
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
