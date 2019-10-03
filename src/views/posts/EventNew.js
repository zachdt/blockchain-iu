import React from 'react'

import FirebaseAuth from '../misc/FirebaseAuth'
import Error from '../misc/Error'
import logIn from '../../actions/logIn'
import createEvent from '../../actions/createEvent'
import EventForm from './EventForm'
import {
  Page,
} from '../../styles/layout'

const EventNew = ({history}) => (
  <Page>
    <FirebaseAuth>
      { ({isLoading, error, auth}) => {
        
        if (error) {
          return <Error error={error} />
        }

        if (isLoading) {
          return <div>loading...</div>
        }

        if (!auth) {
          return <div>
            <p>You must be logged in to add events</p>
            <button onClick={logIn}>log in</button>
          </div>
        }

        return <EventForm
          onSubmit={values => createEvent(values).then(event => history.push(`/${event.slug}`))}
        />
      }}
    </FirebaseAuth>
  </Page>
)

export default EventNew
