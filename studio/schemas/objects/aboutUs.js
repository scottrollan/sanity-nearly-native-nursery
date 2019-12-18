export default {
    type: 'object',
    name: 'aboutUs',
    title: 'About Us',
    fields: [
      {
        name: 'label',
        type: 'string',
        title: 'Label',
      },
      {
        name: 'heading',
        type: 'string',
        title: 'Heading',
      },
    ],
    preview: {
        select: {
          heading: 'heading',
        },
        prepare({ heading }) {
          return {
            title: `${heading}`,
            subtitle: 'About Us section',
          };
        },
      },
  };
  