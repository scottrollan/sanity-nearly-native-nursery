export default {
  title: 'Amount',
  name: 'amount',
  type: 'object',
  fields: [
    {
      title: 'Container Size',
      name: 'containerSize',
      type: 'string'

      // Here the user will be prompted to write any string to describe the resource type.
      // There is a way to limit this to a number of preset strings and provide a pull-down
      // or radio buttons to select resource. This is left as an exercise for the reader! See
      // the reference docs!
    },
    {
      title: 'Price',
      name: 'price',
      type: 'number'
    }
  ]
}
