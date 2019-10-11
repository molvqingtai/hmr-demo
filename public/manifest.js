module.exports = {
  name: 'hmr-demo',
  manifest_version: 2,
  background: {
    page: 'background.html'
  },
  content_scripts: [{
    js: ['content.js'],
    matches: ['http://www.example.com/']
  }]
}
