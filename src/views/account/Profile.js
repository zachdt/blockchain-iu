import React from 'react'
import { Route } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import logOut from '../../actions/logOut'

const classes = makeStyles({
  profilePic: {
    borderRadius: '50%',
    float: 'none',
    alignContent: 'center',
  },
})

const Profile = ({auth}) => {
  const styles = classes()
  
  return (
    <Route render={({history}) => (
      <div>
        <Typography
          variant="body2"
        >
          Blockchain @ IU member services coming soon!
        </Typography>
        <hr/>
        <img 
          className={styles.profilePic} 
          src={auth.photoURL} 
          alt={auth.displayName} 
          width="100" 
          height="100" 
        />
        <hr/>
        <Typography
          variant="h4"
        >
          {auth.displayName}
        </Typography>
        <br/>
        <Typography
          variant="h6"
        >
          {auth.email}
        </Typography>
        <br/>
        <Button onClick={() => logOut().then( () => history.push(`/`)) }>Log Out</Button>
      </div>
    )} />
  )
}

export default Profile
