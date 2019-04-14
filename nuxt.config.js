const pkg = require('./package')
const { getFiles, getSlugs } = require('./server/utils')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Peek-A-Boo Pediatric Therapy',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      // OpenGraph data
      { property: 'og:title', content: 'Home ← Peek-A-Boo Pediatric Therapy' },
      { property: 'og:site_name', content: 'Peek-A-Boo Pediatric Therapy' },
      // The list of types is available here: http://ogp.me/#types
      { property: 'og:type', content: 'website' },
      // Should the the same as your canonical link, see below.
      { property: 'og:url', content: 'https://www.peekabootherapy.com' },
      {
        property: 'og:image',
        content: 'https://www.peekabootherapy.com/icon.png'
      },
      // Often the same as your meta description, but not always.
      { property: 'og:description', content: pkg.description },

      // Twitter card
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: 'https://www.peekabootherapy.com' },
      { name: 'twitter:title', content: 'Home ← Peek-A-Boo Pediatric Therapy' },
      { name: 'twitter:description', content: pkg.description },
      {
        name: 'twitter:image:src',
        content: 'https://www.peekabootherapy.com/icon.png'
      },

      // Google / Schema.org markup:
      { itemprop: 'name', content: 'Home ← Peek-A-Boo Pediatric Therapy' },
      { itemprop: 'description', content: pkg.description },
      {
        itemprop: 'image',
        content: 'https://www.peekabootherapy.com/icon.png'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'canonical', href: 'https://www.peekabootherapy.com' }
    ]
  },

  router: {
    mode: 'hash',
    base: '/dist/'
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: ['@/assets/scss/main.scss', '@/assets/scss/fonts.scss'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/font-awesome', ssr: false },
    { src: '~/plugins/carousel', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/pwa',
    // Doc: https://github.com/vanhoofmaarten/nuxt-mq
    'nuxt-mq'
  ],
  mq: {
    defaultBreakpoint: 'default',
    breakpoints: {
      sm: 590,
      md: 1023,
      lg: Infinity
    }
  },

  /**
   * Generate configuration
   * Creates routes for dynamicfiles
   */
  generate: {
    /**
     * Routes set to slugs for each directory in /employee-bios's markdown file
     */
    routes: getFiles('./assets/files/employee-bios').map(getSlugs)
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      const vueLoader = config.module.rules.find(
        rule => rule.loader === 'vue-loader'
      )
      vueLoader.options.transformAssetUrls = {
        video: ['src', 'poster'],
        source: 'src',
        img: 'src',
        image: 'xlink:href',
        'b-img': 'src',
        'b-img-lazy': ['src', 'blank-src'],
        'b-card': 'img-src',
        'b-card-img': 'img-src',
        'b-carousel-slide': 'img-src',
        'b-embed': 'src'
      }
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      config.node = {
        fs: 'empty'
      }
      // Add markdown loader
      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader'
      })
    }
  }
}
