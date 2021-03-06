const fetchResource = require('./fetch-resource')
const parser = require('./parser')
const save = require('./save')
module.exports = main

async function main () {
  const response = await fetchResource.get()
  const offers = parser.parse(response)
  save.save(offers)
}
