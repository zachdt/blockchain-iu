import Firebase from 'firebase/app'
import slugify from 'slugify'

import { prepareDocForCreate } from './helpers/firestoreHelpers'

const createEvent = values => {

  values.slug = slugify(values.title, {lower: true})

  return Firebase.firestore()
    .collection('events')
    .add(prepareDocForCreate(values))
    .then( () => values)
    .catch( error => {
      alert(`Whoops, couldn't create the post: ${error.message}`)
    })
}

export default createEvent
