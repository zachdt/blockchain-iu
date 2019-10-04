const admin = require('firebase-admin')
const functions = require('firebase-functions')

admin.initializeApp(functions.config().firebase)

// https://firebase.google.com/docs/reference/js/firebase.firestore.Settings#~timestampsInSnapshots
// temporary setting to squash error date warning
// TODO - remove once this is the firebase default behavior
admin.firestore().settings({timestampsInSnapshots: true})

/*const search = require('./lib/search')

exports.updatePostInSearchIndex = functions
  .firestore
  .document('events/{eventId}')
  .onWrite(search.updatePostInSearchIndex)*/
