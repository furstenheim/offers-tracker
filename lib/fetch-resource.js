const fetch = require('node-fetch')
const config = require('./config')

module.exports = {
  get
}
async function get () {
  const response = await fetch(config.url)
  return response.text()
}
