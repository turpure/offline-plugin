module.exports = __CONFIG__({
  caches: {
    main: ['external.js', ':rest:']
  },

  externals: ['external.js'],
  excludes: ['main.js'],
  version: '[hash]'
}, {
  // Disable forced AppCache by __tests flags
  appCacheEnabled: false
});