const fetchResource = require('./fetch-resource')
const parser = require('./parser')
module.exports = main

async function main () {
  const response = await fetchResource.get()
  const offers = parser.parse(response)
  console.log(offers)
}
