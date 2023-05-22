import {defineField, defineType} from 'sanity'
import {MdViewCarousel as icon} from 'react-icons/md'


export default defineType({
  name: 'partner',
  title: 'Partner',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'desc',
      title: 'Desc',
      type: 'string',
      description: 'Please input Description',
    }),
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
