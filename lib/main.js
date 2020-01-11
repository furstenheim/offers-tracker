const fetchResource = require('./fetch-resource')

module.exports = main

async function main () {
  const response = await fetchResource.get()
  console.log(response)
}
