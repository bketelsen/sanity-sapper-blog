export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5fec7b23bb934e9bbf6e5d49',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-3u4th4cr',
                  apiId: '293f4ed8-99d0-439b-b44b-aecfb593cb17'
                },
                {
                  buildHookId: '5fec7b2318a4e542df68e0da',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-b33g2h6s',
                  apiId: '8a950e69-b900-4f95-ab8d-968d65e52b71'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bketelsen/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-b33g2h6s.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
