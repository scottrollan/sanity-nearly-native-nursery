export default {
    type: 'object',
    name: 'landingLogo',
    title: 'Big Logo',
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
            subtitle: 'Big Logo with Company Name',
          };
        },
      },
  };
  