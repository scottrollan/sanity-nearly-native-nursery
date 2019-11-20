export default {
  name: 'plant',
  type: 'document',
  title: 'Plant',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
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
          {title: 'Shrubs', value: 'shrubs'},
          { title: 'Trees', value: 'trees' },
          { title: 'Palms', value: 'palms' },
          { title: 'Opuntia', value: 'opuntia' },
          { title: 'Perennials', value: 'perennials' },
          { title: 'Grasses', value: 'grasses' },
          { title: 'Ferns', value: 'ferns' },
          { title: 'Vines', value: 'vines' }
        ]
      }
    },
    {
      name: 'lowZone',
      type: 'string',
      title: 'Low Zone',
      options: {
        list: [
          { title: '1', value: '1' },
          { title: '2', value: '2' },
          { title: '3', value: '3' },
          { title: '4', value: '4' },
          { title: '5', value: '5' },
          { title: '6', value: '6' },
          { title: '7', value: '7' },
          { title: '8', value: '8' },
          { title: '9', value: '9' },
          { title: '10', value: '10' },
          { title: '11', value: '11' },
          { title: '12', value: '12' }
        ]
      }
    },
    {
      name: 'highZone',
      type: 'string',
      title: 'High Zone',
      options: {
        list: [
          { title: '1', value: '1' },
          { title: '2', value: '2' },
          { title: '3', value: '3' },
          { title: '4', value: '4' },
          { title: '5', value: '5' },
          { title: '6', value: '6' },
          { title: '7', value: '7' },
          { title: '8', value: '8' },
          { title: '9', value: '9' },
          { title: '10', value: '10' },
          { title: '11', value: '11' },
          { title: '12', value: '12' }
        ]
      }
    },
    {
      name: 'commonName',
      type: 'string',
      title: 'Common Name'
    },
    {
      name: 'variety',
      type: 'string',
      title: 'Variety'
    },
    {
      name: 'regionalName',
      type: 'string',
      title: 'Regional Name'
    },
    {
      name: 'botanicalName',
      type: 'string',
      title: 'Botanical Name'
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
      of: [{
        title: 'Amount',
        type: 'amount',
        name: 'amount',
      }]
    },
    {
      title: 'Purchase Notes',
      name: 'purchaseNotes',
      type: 'text'
    }
  ]
}
