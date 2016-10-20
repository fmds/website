module.exports = {
  "/index.html": {
      page: 'home',
      spec: {
          '#reviews': {
              component: 'quotes'
          }
      }
  },
  "/contact.html": {
    page: 'contact',
          selectors: {
          '.contact': {
              className: 'active'
          }
      }
  },
   "/code-of-conduct.html": {
    page: 'code-of-conduct'
  },
    "/terms.html": {
    page: 'terms'
  },

  options: {
      outputDir: '/docs',
      files: ['/style/style.css']
  }
}
