import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

import {
  Page,
} from '../../styles/layout'
import { style } from '@material-ui/system';

const classes = makeStyles({
  row: {
    display: 'flex'
  },
  column: {
    flex: '50%'
  }
})

const Courses = () => {
  const styles = classes()

  return (
    <Page>
      <div className={styles.fix}>
        <Typography 
          variant="h3" 
          component="h1"
        >
          Fall 2019 Courses
        </Typography>
        <br />
        <hr/>
        <div className={styles.row}>
          <div className={styles.column}>
            <Typography
              variant="h4"
              component="p"
            >
              Business of Blockchain
            </Typography>
            <br/>
            <Button href="https://docs.google.com/document/d/1dvxUKS20WlTdHogcLkcpT2W0VaB6WZHWjKu9xajj0_Y/edit?usp=sharing" target="_blank">Syllabus</Button>
            <Button href="https://forms.gle/D4YUcXv44bMqD59i7" target="_blank">Register</Button>
            </div>
        
          <div className={styles.column}>
            <Typography
              variant="h4"
              component="p"
            >
              Blockchain Engineering
            </Typography>
            <br/>

            <Button href="https://docs.google.com/document/d/1_3hmIpVEpk94fJD_zWG33We-N4giUrEjSBFym6mWsms/edit?usp=sharing" target="_blank">Syllabus</Button>
            <Button href="https://forms.gle/oNvGU6rdhdVaEBvt9" target="_blank">Register</Button>
          </div>
          </div>
        <br/>
      </div>
    </Page>
  )
}

export default Courses