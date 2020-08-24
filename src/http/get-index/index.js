const Main = require('@architect/views/main.js')
const staticAssetsHelper = require('./static-assets-helper')

// Customize your site by changing the data below
exports.handler = async function Index () {
  let body = Main({
    /**
     * Basic bio
     */
    fullname: 'Tom Coleman', // ←  Start by adding your name!
    title: 'My personal site!',
    occupation: 'Security Architect',
    location: 'Hereford, UK',
    bio: 'Moving the security ball forward',

    /**
     * Contact / social
     * - Comment out any item below to remove it from your page
     */
    email: 'tcoleman@hey.com',
    twitter: 'tompcoleman',
    linkedin: 'tom-c-1370304a',
    
    
    /**
     *instagram: 'yourInsta',
     *facebook: 'your-facebook-name',
     **/
    
    /**
     * Layout

    */
    photographer: 'Tom Coleman',
    /**
    *service: 'Unsplash',
    *credit: 'https://unsplash.com/@von_co',
         */
    image: staticAssetsHelper('Optimized-background3.jpg')
    // or link to an external image URL such as ↓
    // image: 'https://images.unsplash.com/photo-1506535772317-9fdb71c959c6'
  })

  return {
    headers: {
      'content-type': 'text/html; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    statusCode: 200,
    body
  }
}
