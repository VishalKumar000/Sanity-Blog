export default {
  title: 'Post Body',
  name: 'bodyText',
  type: 'array',
  of: [
    {
      type: 'block',
      title: 'Block',
      // styles: [ styling heading stuff
      //   { title: 'Normal', value: 'normal' },
      //   { title: 'H1', value: 'h1' },
      // ],
      lists: [
        { title: 'Bullet List', value: 'bullet' },
        { title: 'Number List', value: 'number' },
      ], // if we have other custom list we can add here
      marks: {
        // decorators: [
        //   { title: 'strong boi', value: 'strong' },
        //   { title: 'Emphasis boi', value: 'em' },
        // ],
        // annotations: [
        //   {
        //     title: 'URL',
        //     name: 'link',
        //     type: 'object',
        //     fields: [
        //       {
        //         title: 'URL',
        //         name: 'href',
        //         type: 'url',
        //       },
        //       {
        //         title: 'Note',
        //         name: 'note',
        //         type: 'string',
        //       },
        //     ],
        //   },
        // ], // adding custom objects
      },
    },
    {
      type: 'customImage',
    },
    {
      type: 'customCode',
    },
  ],
};
