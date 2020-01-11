const sinon = require('sinon')
const fetchResource = require('./lib/fetch-resource')
const fetchResourceFake = require('./test/fetch-resource-fake')
const main = require('./lib/main')

sinon.stub(fetchResource, 'get')
  .callsFake(fetchResourceFake.get)

main()
