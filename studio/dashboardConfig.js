export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5d556be491dcdf3de29b08a4',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ms93g3d7',
                  apiId: '37dd3407-d621-4d94-bc4a-04b9669868e3'
                },
                {
                  buildHookId: '5d556be4c4cf750f3a6a02ae',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-g4mden2k',
                  apiId: '5987b6eb-27da-4726-9174-f19439a38cd5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/abonventre/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-g4mden2k.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
