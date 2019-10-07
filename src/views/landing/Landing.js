import React from 'react'
import { FirestoreCollection } from 'react-firestore'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import EventPreview from '../posts/EventPreview'
import Error from '../misc/Error'

import {
  Page,
} from '../../styles/layout'


const Workshops = 'https://i.imgur.com/kq9DEq8.png?1'

const Events = 'https://i.imgur.com/UllGnzo.jpg'

const Research = 'https://i.imgur.com/05f9jC3.png'

const classes = makeStyles({
  right: {
    float: 'center',
  },
  flex: {
    flex: 'row',
    display: 'flex'
  },
  text: {
    marginTop: '3em'
  },
  images1: {
    width: '60%',
    height: '60%',
    padding: '2em'
  },
})


export default function Landing () {
  const styles = classes()
  return (
    <Page>
      <br/>
      <Typography
        variant="h4"
        component="h2"
      >
        Workshops and Certifications
      </Typography>
      <hr/>
      <br/>
      <div className={styles.flex}>
        <Typography
          variant="h6"
          component="p"
          className={styles.text}
        >
          Instructing the IU community on blockchain ideation, engineering, and economics since 2017.
        </Typography>
        <img className={styles.images1} src={Workshops} />
      </div>
      <br/>
      <Typography
        variant="h4"
        component="h2"
      >
        Events and Meetups
      </Typography>
      <hr/>
      <br/>
      <div className={styles.flex}>
      < img className={styles.images1} src={Events} />
        <Typography
          variant="h6"
          component="p"
          className={styles.text}
        >
          Team up with other passionate students, and network with blockchain professionals from around the country.
        </Typography>
      </div>
      <br/>
      <Typography
        variant="h4"
        component="h2"
        className={styles.right}
      >
        Research and Development
      </Typography>
      <hr/>
      <br/>
      <div className={styles.flex}>
        <Typography
          variant="h6"
          component="p"
          className={styles.text}
        >
          Innovate at the bleeding edge of technology though open source contribution, technology consulting, and academic research.
        </Typography>
        <img className={styles.images1} src={Research} />
      </div>
      <br/>
      <br/>
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
                <EventPreview event={event} />
              </div>
            ))}
          </div>
        }}
      </FirestoreCollection>

    </Page>
  )
  
}
