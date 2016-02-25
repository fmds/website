module.exports = {
  "/index.html": {
      page: 'home',
  },
  "/tickets.html": {
    page: 'tickets',
    selectors: {
        '.tickets': {
            className: 'active'
        }
    }

  },
  "/schedule.html": {
    page: 'schedule',
       selectors: {
          '.schedule': {
              className: 'active'
          }
      }

  },
  "/workshop.html": {
    page: 'workshop',
     selectors: {
          '.workshop': {
              className: 'active'
          }
      }

  },
  "/venue.html": {
    page: 'venue',
        selectors: {
        '.venue': {
            className: 'active'
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


}
