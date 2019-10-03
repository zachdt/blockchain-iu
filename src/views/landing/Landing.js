import React from 'react'
import { FirestoreCollection } from 'react-firestore'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'


import EventPreview from './EventPreview'
import Error from '../misc/Error'
import {
  InternalLink,
} from '../../styles/links'
import {
  Page,
} from '../../styles/layout'

const classes = makeStyles({
  right: {
    float: 'right'
  }
})


export default function Landing () {
  const styles = classes()
  return (
    <Page>
        <Typography
          variant="h4"
          component="h2"
        >
          Education
        </Typography>
        <hr/>
        <br/>
        <Typography
          variant="h4"
          component="h2"
          className={styles.right}
        >
          Research
        </Typography>
        <br/>
        <br/>
        <hr/>
        <Typography 
          variant="h3" 
          component="h1"
        >
          Upcoming Events
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
              return <p>No upcoming events... stay tuned</p>
            }

            return <div>
              {data.map(event => (
                <div key={event.id}>
                  <EventPreview event={event}></EventPreview>
                </div>
              ))}
            </div>

          }}
        </FirestoreCollection>

        <hr />
      </Page>
  )
  
}
