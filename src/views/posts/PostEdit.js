import React from 'react'
import { FirestoreCollection } from 'react-firestore'

import Error from '../misc/Error'
import deleteEvent from '../../actions/deleteEvent'
import updatePost from '../../actions/updatePost'
import EventForm from './EventForm'
import {
  Page,
} from '../../styles/layout'

const PostEdit = ({match, history}) => (
  <Page>
    <FirestoreCollection
      path={'events'}
      filter={['slug', '==', match.params.slug]}
    >
      { ({error, isLoading, data}) => {
        if (error) {
          return <Error error={error} />
        }

        if (isLoading) {
          return <p>loading...</p>
        }
        
        if (data.length === 0) {
          return <Error />
        }

        const event = data[0]

        return <div>
          <EventForm
            event={event}
            onSubmit={values => updatePost(event.id, values).then(() => history.push(`/${event.slug}`))}
          />
          <br />
          <button
            onClick={() => deleteEvent(event).then( () => history.push(`/`))}
          >Delete event</button>
        </div>
      }}
    </FirestoreCollection>
  </Page>
)

export default PostEdit
