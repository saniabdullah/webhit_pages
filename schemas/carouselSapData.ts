import {defineField, defineType} from 'sanity'
import {MdViewCarousel as icon} from 'react-icons/md'


export default defineType({
  name: 'carousel_sap',
  title: 'Carousel Sap',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Please input Title',
    }),
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
    select: {title: 'title', media: 'image'},
  },
})
