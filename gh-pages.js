var ghpages = require('gh-pages');

ghpages.publish(
    'src\\app.html', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://helloyork.github.io/newProject2/', // Update to point to your repository  
        user: {
            name: 'Your name', // update to use your name
            email: 'Your Email address' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)