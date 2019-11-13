export default {
    type: 'object',
    name: 'imageOnly',
    title: 'Image without text',
    fields: [
      {
        name: 'image',
        type: 'figure',
        title: 'Image',
      },
    ],
    preview: {
      select: {
        media: 'image',
      },
      prepare({ media }) {
        return {
          title: `Image Only`,
          subtitle: 'Image only',
          media,
        };
      },
    },
  };
  