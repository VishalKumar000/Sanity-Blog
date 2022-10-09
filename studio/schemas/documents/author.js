import { MdPerson } from 'react-icons/md';

export default {
  title: 'Author',
  name: 'author',
  type: 'document',
  icon: MdPerson,
  fields: [
    {
      title: 'name',
      name: 'Name',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'Name',
        maxLength: 96,
      },
    },
    {
      title: 'Profile Image',
      name: 'profileImage',
      type: 'customImage',
    },
  ],
  preview: {
    select: {
      title: 'Name',
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
