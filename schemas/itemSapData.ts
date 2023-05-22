import {defineField, defineType} from 'sanity'
import {MdViewCarousel as icon} from 'react-icons/md'


export default defineType({
  name: 'item_sap',
  title: 'Item Sap',
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
