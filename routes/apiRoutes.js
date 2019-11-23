const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: 'sanity-nearly-native-nursery',
  dataset: 'plants',
//   token: 'sanity-auth-token', // or leave blank to be anonymous user
  useCdn: true // `false` if you want to ensure fresh data
})

