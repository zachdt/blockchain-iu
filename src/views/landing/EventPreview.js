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

const styles = makeStyles({
  card: {
    maxWidth: '70%',
  },
  media: {
    minHeight: 140,
  }
})

const EventPreview = ({event}) => (
  <Card className={styles.card}>
    <CardActionArea>
      <CardMedia
        className={styles.media}
        src={event.img}
        title={event.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {event.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {event.content}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button href={`/${event.slug}`} size="small">
        Learn More
      </Button>
      <Button 
        href={event.rsvp} 
        size="small"
      >
        Register
      </Button>
    </CardActions>
  </Card>
)

export default EventPreview