import { MdCode } from 'react-icons/md';

// sanity/code-input for code input
export default {
  name: 'customCode',
  title: 'Code',
  type: 'object',
  icon: MdCode,
  fields: [
    {
      name: 'code',
      title: 'code',
      type: 'code',
    },
  ],
  preview: {
    select: { title: 'code.code' },
  },
};
