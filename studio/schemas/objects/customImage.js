import { MdImage } from 'react-icons/md';

export default {
  title: 'Image',
  name: 'customImage',
  type: 'image',
  icon: MdImage,
  options: {
    hotspot: true,
  },
  fields: [
    {
      title: 'All Text',
      name: 'alt',
      type: 'string',
      validation: (Rule) => Rule.error("All text can't be empty ").required(),
      options: {
        isHighlighted: true,
      },
    },
  ],
};
