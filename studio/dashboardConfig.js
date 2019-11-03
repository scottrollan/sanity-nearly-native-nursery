export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dbf3db5bb51228bf23bb6e1',
                  title: 'Sanity Studio',
                  name: 'sanity-nearly-native-nursery-studio',
                  apiId: 'e3e53af1-911d-4e90-be21-bd5e84bf32b9'
                },
                {
                  buildHookId: '5dbf3db578c6e79ab6053725',
                  title: 'Landing pages Website',
                  name: 'sanity-nearly-native-nursery',
                  apiId: 'f9d68228-0dfd-4aec-b7f6-f6625cc5a71e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/scottrollan/sanity-nearly-native-nursery',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nearly-native-nursery.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
