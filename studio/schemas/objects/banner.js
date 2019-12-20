export default {
    type: 'object',
    name: 'banner',
    title: 'Nearly Native Nursery Banner',
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
            subtitle: 'spans the entire page width',
          };
        },
      },
  };
  