import React from 'react'
import { FirestoreCollection } from 'react-firestore'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import EventPreview from '../posts/EventPreview'

import Error from '../misc/Error'
import {
  InternalLink,
} from '../../styles/links'
import {
  Page,
} from '../../styles/layout'

const classes = makeStyles({
  fix: {
    marginLeft: '0em'
  }
})



const EventsList = () => {
  const styles = classes()

  return (
    <Page className={styles.fix}>
      <Typography 
          variant="h3" 
          component="h1"
        >
          Event List
        </Typography>
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
}

export default EventsList
