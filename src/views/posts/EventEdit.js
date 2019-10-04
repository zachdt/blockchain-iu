import React from 'react'
import { FirestoreCollection } from 'react-firestore'

import Error from '../misc/Error'
import deleteEvent from '../../actions/deleteEvent'
import updateEvent from '../../actions/updateEvent'
import EventForm from './EventForm'

import Button from '@material-ui/core/Button'

import {
  Page,
} from '../../styles/layout'

const EventEdit = ({match, history}) => (
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
            onSubmit={values => updateEvent(event.id, values).then(() => history.push(`/${event.slug}`))}
          />
          <br />
          <Button
            onClick={() => deleteEvent(event).then( () => history.push(`/`))}
          >Delete event</Button>
        </div>
      }}
    </FirestoreCollection>
  </Page>
)

export default EventEdit
