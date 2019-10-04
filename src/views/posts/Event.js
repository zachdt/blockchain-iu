import React from 'react'
import { FirestoreCollection } from 'react-firestore'

import Error from '../misc/Error'
import FirebaseAuth from '../misc/FirebaseAuth'

import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import {
  InternalLink,
} from '../../styles/links'
import {
  Page,
} from '../../styles/layout'

const Event = ({match}) => (
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

        return (
          <div>
            <Typography
              variant="h2"
              component="h2"
            >
              {event.title}
            </Typography>
            <hr/>
            <Typography
              variant="h5"
            >
              {event.date}
            </Typography>
            <br/>
            <Typography
              variant="body1"
            >
              {event.content}
            </Typography>
            <br/>
            <p>Location: {event.loc}</p>
            <br/>
            <hr/>
            <Button 
              href={event.rsvp} 
              size="medium"
            >Register</Button>
            <FirebaseAuth>
              { ({isAdmin}) => {
                return isAdmin ?  <Button><InternalLink to={`/${event.slug}/edit`}>Edit</InternalLink></Button> : ''
              } }
            </FirebaseAuth>
          </div>
        )
      }}
    </FirestoreCollection>
  </Page>
)

export default Event
