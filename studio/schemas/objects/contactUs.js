export default {
    type: 'object',
    name: 'contactUs',
    title: 'Contact Us',
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
            subtitle: 'Contact Us section',
          };
        },
      },
  };
  