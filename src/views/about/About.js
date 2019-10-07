import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import {
  Page,
} from '../../styles/layout'

const classes = makeStyles({
  fix: {
  }
})

const About = () => {
  const styles = classes()

  return (
    <Page>
      <div className={styles.fix}>
        <Typography 
          variant="h3" 
          component="h1"
        >
          About Us
        </Typography>
        <hr/>

        <Typography
          variant="h6"
          component="p"
        >
          Blockchain @ IU is everything blockchain at Indiana Unviersity.
        </Typography>
        <br/>
        <Typography
          variant="h6"
          component="p"
        >
          We are a Kelley School of Business organization made up of a wide variety of students, from computer science researchers to undergrad crypto traders.
          Students of all experience levels and majors are welcome.  
          <br/>
          <br/>
          Register for an event, join a cohort, and build the future.
        </Typography>
        <br/>
      </div>
    </Page>
  )
}

export default About