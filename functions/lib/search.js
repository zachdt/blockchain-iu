const functions = require('firebase-functions')
const Algolia = require('algoliasearch')

const ALGOLIA_APP_ID = functions.config().algolia.app_id
const ALGOLIA_ADMIN_KEY = functions.config().algolia.admin_key
let algolia = Algolia(ALGOLIA_APP_ID, ALGOLIA_ADMIN_KEY)
let postIndex = algolia.initIndex('events')

// Algolia search - update search index
// https://www.algolia.com/doc/tutorials/indexing/3rd-party-service/firebase-algolia/
exports.updatePostInSearchIndex = (change, context) => {
  const event = change.after.data()

  if (!post) {
    return postIndex.deleteObject(context.params.eventId)
  }

  event.objectID = context.params.eventId
  return postIndex.saveObject(event)
}
