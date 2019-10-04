import Firebase from 'firebase/app'
import { prepareDocForUpdate } from './helpers/firestoreHelpers'

const updateEvent = (postId, values) => {

  return Firebase.firestore()
    .collection('events')
    .doc(postId)
    .update(prepareDocForUpdate(values))
    .catch( error => {
      alert(`Whoops, couldn't edit the post: ${error.message}`)
    })
}

export default updateEvent
