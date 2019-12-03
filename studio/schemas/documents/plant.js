export default {
  name: 'plant',
  type: 'document',
  title: 'Plant',
  fields: [
    {
      name: 'botanicalName',
      type: 'string',
      title: 'Botanical Name'
    },
    {
      name: 'variety',
      type: 'string',
      title: 'Variety'
    },
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'commonName',
      type: 'string',
      title: 'Common Name'
    },
    {
      name: 'regionalName',
      type: 'string',
      title: 'Regional Name'
    },
    {
      name: 'id',
      type: 'number',
      title: 'Id'
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
      options: {
        list: [
          { title: 'Shrubs', value: 'shrubs' },
          { title: 'Trees', value: 'trees' },
          { title: 'Palms', value: 'palms' },
          { title: 'Opuntia', value: 'opuntia' },
          { title: 'Perennials', value: 'perennials' },
          { title: 'Grasses', value: 'grasses' },
          { title: 'Ferns', value: 'ferns' },
          { title: 'Vines', value: 'vines' },
          { title: 'Seeds', value: 'seeds' },
          { title: 'Yucca', value: 'yucca' }
        ]
      }
    },
    {
      name: 'lowZone',
      type: 'number',
      title: 'Low Zone',
      validation: Rule =>
        Rule.required()
          .min(1)
          .max(12)
    },
    {
      name: 'highZone',
      type: 'number',
      title: 'High Zone',
      validation: Rule =>
        Rule.required()
          .min(Rule.valueOfField('lowZone'))
          .max(12)
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description'
    },
    {
      name: 'notes',
      type: 'string',
      title: 'Notes'
    },
    {
      title: 'Soil PH',
      name: 'soilPH',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            list: [
              { title: 'Acid', value: 'acid' },
              { title: 'Neutral', value: 'neutral' },
              { title: 'Alkaline', value: 'alkaline' }
            ]
          }
        }
      ]
    },
    {
      title: 'Soil Type',
      name: 'soilType',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            list: [
              { title: 'Clay', value: 'clay' },
              { title: 'Average', value: 'average' },
              { title: 'Sand', value: 'sand' }
            ]
          }
        }
      ]
    },
    {
      title: 'Water Level',
      name: 'waterLevel',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            list: [
              { title: 'Dry', value: 'dry' },
              { title: 'Average', value: 'average' },
              { title: 'Wet', value: 'wet' }
            ]
          }
        }
      ]
    },
    {
      title: 'Sunlight Level',
      name: 'sunlightLevel',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            list: [
              { title: 'Full', value: 'full' },
              { title: 'Partial', value: 'partial' },
              { title: 'Shade', value: 'shade' }
            ]
          }
        }
      ]
    },
    {
      title: 'Foliage',
      name: 'foliage',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            list: [
              { title: 'Deciduous', value: 'deciduous' },
              { title: 'Semi-Evergreen', value: 'semi-evergreen' },
              { title: 'Evergreen', value: 'evergreen' }
            ]
          }
        }
      ]
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image'
    },
    {
      title: 'Amount',
      name: 'amount',
      type: 'array',
      of: [
        {
          title: 'Amount',
          type: 'amount',
          name: 'amount'
        }
      ]
    },
    {
      title: 'Purchase Notes',
      name: 'purchaseNotes',
      type: 'text'
    }
  ]
}
