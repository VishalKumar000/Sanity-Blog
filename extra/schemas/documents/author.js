import { MdPerson } from 'react-icons/md';

export default {
  title: 'Author',
  name: 'author',
  type: 'document',
  icon: MdPerson,
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      title: 'Profile Image',
      name: 'profileImage',
      type: 'customImage',
    },
    {
      title: 'Bio',
      name: 'bio',
      type: 'normalText',
    },
  ],
  preview: {
    select: {
      title: 'name',
      image: 'profileImage',
      slug: 'slug',
    },
    prepare({ image, title, slug }) {
      return {
        title,
        media: image,
        subtitle: slug.current, // in slug we have multiple properties (current have text)
      };
    },
  },
};
