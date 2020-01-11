const fs = require('fs-extra')
const path = require('path')
module.exports = {
  get
}

async function get () {
  const text = await fs.readFile(path.join(__dirname, '../resources/mock-response-2020-01-11.html'))
  return text.toString()
}
