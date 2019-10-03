import React from 'react'
import { Route } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'

import logOut from '../../actions/logOut'

const styles = makeStyles({
  profilePic: {
    borderRadius: '50%'
  }
})

const Profile = ({auth}) => {
  const classes = styles()
  
  return (
    <Route render={({history}) => (
      <div>
        <img 
          className={classes.profilePic} 
          src={auth.photoURL} 
          alt={auth.displayName} 
          width="100" 
          height="100" 
        />
        <p><strong>{auth.displayName}</strong></p>
        <p>{auth.email}</p>
        <button onClick={() => logOut().then( () => history.push(`/`)) }>log out</button>
      </div>
    )} />
  )
}

export default Profile
