import React from 'react'
import { FirestoreCollection } from 'react-firestore'

import EventPreview from '../posts/EventPreview'

import Error from '../misc/Error'
import {
  InternalLink,
} from '../../styles/links'
import {
  Page,
} from '../../styles/layout'

const EventsList = () => (
  <Page>
    <hr/>
    <FirestoreCollection
      path={'events'}
    >
      { ({error, isLoading, data}) => {

        if (error) {
          return <Error error={error} />
        }

        if (isLoading) {
          return <p>loading...</p>
        }

        if (data.length === 0) {
          return <p>No events yet!</p>
        }

        return <div>
          {data.map(event => (
            <div key={event.id}>
              <EventPreview event={event}/>
            </div>
          ))}
        </div>

      }}
    </FirestoreCollection>

    <hr />
    
  </Page>
)

export default EventsList
