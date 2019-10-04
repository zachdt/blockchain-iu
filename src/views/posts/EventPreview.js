import React from 'react'

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import { makeStyles } from '@material-ui/core/styles'

import { InternalLink } from '../../styles/links'

const classes = makeStyles({
  card: {
    maxWidth: '30em',
  },
  media: {
    minHeight: 0,
  },
  center: {
    marginRight: '2em'
  },
  flex: {
    display: 'flex',
    flex: 'row'
  }
})

const EventPreview = ({event}) => {
  const styles = classes()
  const image = event.img
  return (
    <Card className={styles.card}>
      <CardActionArea href={`/${event.slug}`}>
        <CardMedia
          className={styles.media}
          src={image}
          title={event.title}
        />
        <CardContent>
          <div className={styles.flex}>
            <Typography gutterBottom variant="h5" component="h2">
              {event.title}
            </Typography>
          </div>
          
          <Typography gutterBottom variant="body1" component="h3">
            {event.date}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {event.content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button 
          className={styles.center}
          href={event.rsvp}
          target="_blank"
          size="small"
        >
          Register
        </Button>
      </CardActions>
    </Card>
  )
}

export default EventPreview