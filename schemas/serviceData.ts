import {defineField, defineType} from 'sanity'
import {MdRoomService as icon} from 'react-icons/md'


export default defineType({
  name: 'services',
  title: 'Services',
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
