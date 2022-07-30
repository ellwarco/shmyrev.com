const config = require("./data/SiteConfig");
const pathPrefix = config.pathPrefix === "/" ? "" : config.pathPrefix;

module.exports = {
    pathPrefix: config.pathPrefix,
    siteMetadata: {
    siteUrl: config.siteUrl + pathPrefix,
    rssMetadata: {
      site_url: config.siteUrl + pathPrefix,
      feed_url: config.siteUrl + pathPrefix + config.siteRss,
      title: config.siteTitle,
      description: config.siteDescription,
      image_url: `${config.siteUrl + pathPrefix}/assets/logo.png`,
      author: config.userName,
      copyright: config.copyright
    },
    siteName: 'Sergey personal website',
    siteLogo: '/assets/logo.png',
    siteTitle: 'Sergey, Front-end Web Developer',
    description: `Front-end Web Developer based in Clapiers, FRANCE. I create awesome websites/web-apps which are enjoyable and fun to use.`,
    siteDescription: 'Front-end Web Developer based in Clapiers, FRANCE. I create awesome websites/web-apps which are enjoyable and fun to use.',
    siteLanguage: 'en_US',
    siteLinks: {
        Github: {
            handle: 'ellwarco',
        },
        Twitter: {
            handle: 'ellwarco',
        },
        instagram: {
            handle: 'ellwarco',
        },
        email: {
            email: 'sergey@shmyrev.com',
        },
    },
  },
  plugins: [
    {
        resolve: 'gatsby-plugin-favicon',
            options: {
                logo: './src/assets/favicon.png',
                injectHTML: true,
                    icons: {
                        android: true,
                        appleIcon: true,
                        appleStartup: true,
                        coast: false,
                        favicons: true,
                        firefox: true,
                        twitter: false,
                        yandex: false,
                        windows: false
                    }
            }
        },{
        resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Sergey SH',
                short_name: 'SER SHM',
                start_url: '/',
                background_color: '#f7f0eb',
                theme_color: '#a2466c',
                display: 'minimal-ui',
                icons: [
                    {
                        src: `favicons/favicon.ico`,
                        sizes: `16x16`,
                        type: `image/ico`,
                      },
                      {
                        src: `favicons/icon-16x16.png`,
                        sizes: `16x16`,
                        type: `image/png`,
                      },
                      {
                        src: `favicons/icon-32x32.png`,
                        sizes: `32x32`,
                        type: `image/png`,
                      },
                      {
                        src: `favicons/icon-48x48.png`,
                        sizes: `48x48`,
                        type: `image/png`,
                      },
                      {
                        src: `favicons/icon-72x72.png`,
                        sizes: `72x72`,
                        type: `image/png`,
                      },
                      {
                        src: `favicons/icon-96x96.png`,
                        sizes: `96x96`,
                        type: `image/png`,
                      },
                      {
                        src: `favicons/icon-144x144.png`,
                        sizes: `144x144`,
                        type: `image/png`,
                      },
                      {
                        src: `favicons/icon-192x192.png`,
                        sizes: `192x192`,
                        type: `image/png`,
                      },
                      {
                        src: `favicons/icon-256x256.png`,
                        sizes: `256x256`,
                        type: `image/png`,
                      },
                      {
                        src: `favicons/icon-384x384.png`,
                        sizes: `384x384`,
                        type: `image/png`,
                      },
                      {
                        src: `favicons/icon-512x512.png`,
                        sizes: `512x512`,
                        type: `image/png`,
                      }
                ]
          },
    },{
        resolve: `gatsby-plugin-google-analytics`,
        options: {
          trackingId: "UA-97941751-1",
          head: false,
          anonymize: true,
          respectDNT: true,
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
    },{
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: './src/data/'
      }
    },{
      resolve: 'gatsby-source-filesystem',
        options: {
            name: 'posts',
            path: `${__dirname}/content/posts`
        },
    },{
    resolve: 'gatsby-source-filesystem',
        options: {
            name: 'pages',
            path: `${__dirname}/src/pages`
        },
    },{
    resolve: 'gatsby-source-filesystem',
        options: {
            name: 'images',
            path: `${__dirname}/src/assets/img`,
        },
    },{
    resolve: 'gatsby-transformer-remark',
    options: {
        plugins: [
            {
                resolve: 'gatsby-remark-copy-linked-files',
                options: {
                  destinationDir: `${__dirname}/public/`,
                }
            },{
                resolve: 'gatsby-remark-graph',
                options: {
                  language: 'mermaid',
                  theme: 'dark'
                }
            },{
                resolve: `gatsby-remark-responsive-image`,
                options: {
                  maxWidth: 1600,
                },
              },{
                resolve: 'gatsby-remark-images',
                options: {
                    maxWidth: 1600,
                    linkImagesToOriginal: false,
                },
            },
            'gatsby-remark-wrap-iframe',
            'gatsby-remark-prismjs',
            'gatsby-remark-smartypants'
          ],
        },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-next',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-json',
    '@jacobmischka/gatsby-plugin-react-svg',
    'gatsby-plugin-netlify',
    `gatsby-plugin-offline`
  ],
};
