module.exports = {
  parse
}

const jsdom = require('jsdom')

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
  if (nodes.length !== 2) {
    throw new Error(`Expected two text elements got ${nodes.length}`)
  }
  const offersNode = nodes[1]
  const potentialOffers = offersNode.innerHTML.split('<br><br>').filter(t => /\d{2}/.test(t))
  if (potentialOffers.length < 3) {
    throw new Error('Failed parsing offers')
  }
  return potentialOffers
}
