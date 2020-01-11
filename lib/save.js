const fs = require('fs-extra')
const path = require('path')
module.exports = {
  save
}
const lastFilepath = path.join(__dirname, '../history/last.txt')
const historyFilepath = path.join(__dirname, '../history/history.txt')
/**
 *
 * @param offers string[]
 * @returns {Promise<void>}
 */
async function save (offers) {
  const lastSavedOffer = await fs.readFile(lastFilepath, 'utf-8')
  const currentLastOffer = offers[offers.length - 1]
  if (lastSavedOffer === currentLastOffer) {
    console.log('Not saving since we do not have a new offer')
    return
  }
  await fs.writeFile(lastFilepath, currentLastOffer)
  await fs.appendFile(historyFilepath, '\n\n' + offers.join('\n\n'))
  console.log('saved history to file')
}
