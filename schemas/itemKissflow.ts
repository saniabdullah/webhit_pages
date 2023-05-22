import {defineField, defineType} from 'sanity'
import {MdViewCarousel as icon} from 'react-icons/md'


export default defineType({
  name: 'item_kissflow',
  title: 'Item Kissflow',
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
    defineField({
        name: 'list',
        title: 'List',
        type: 'array',
        of: [{type: 'string'}]
      }),
  ],
  preview: {
    select: {title: 'title', media: 'image'},
  },
})
