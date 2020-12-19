module.exports = {
  parse
}

const jsdom = require('jsdom')
const _ = require('lodash')
const toFilter = [
  'Channel created',
  `pinned Deleted message`
]
/**
 *
 * @param html
 * @returns {string[]}
 */
function parse (html) {
  const { JSDOM } = jsdom
  const dom = new JSDOM(html)
  const document = dom.window.document
  const nodes = document.querySelectorAll('.tgme_widget_message_bubble>div.js-message_text')
  const filteredNodes = _.filter(nodes, function (n) {
    return !_.find(toFilter, function (f) {
      return _.includes(n.innerHTML, f)
    })
  })
  console.log(filteredNodes[0].innerHTML)
  if (filteredNodes.length !== 1) {
    throw new Error(`Expected 1 text element got ${filteredNodes.length}`)
  }
  const offersNode = filteredNodes[0]
  const potentialOffers = offersNode.innerHTML.split('<br><br>').filter(t => /\d{2}/.test(t))
  if (potentialOffers.length < 3) {
    throw new Error('Failed parsing offers')
  }
  return potentialOffers
}
