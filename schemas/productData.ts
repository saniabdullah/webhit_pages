import {defineField, defineType} from 'sanity'
import {MdViewCarousel as icon} from 'react-icons/md'


export default defineType({
  name: 'product',
  title: 'Product',
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
        name: 'sub_title',
        title: 'Sub_title',
        type: 'string',
        description: 'Please input Sub Title',
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
