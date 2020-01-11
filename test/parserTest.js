const fs = require('fs-extra')
const path = require('path')
const parser = require('../lib/parser')
const { expect } = require('chai')

describe('Parser', function () {
  it('2020-01-11', async function () {
    const text = await fs.readFile(path.join(__dirname, '../resources/mock-response-2020-01-11.html'))
    const offers = parser.parse(text.toString())
    expect(offers).lengthOf(7)
  })
})
