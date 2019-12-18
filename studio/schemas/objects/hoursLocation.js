export default {
    type: 'object',
    name: 'hoursLocation',
    title: 'Hours & Location Buttons',
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
            subtitle: 'Hours & Location buttons',
          };
        },
      },
  };
  