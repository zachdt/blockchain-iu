import Firebase from 'firebase/app'

const deleteEvent = post => {

  return Firebase.firestore()
    .collection('events')
    .doc(post.id)
    .delete()
    .catch( error => {
      alert(`Whoops, couldn't delete the post: ${error.message}`)
    })
}

export default deleteEvent
