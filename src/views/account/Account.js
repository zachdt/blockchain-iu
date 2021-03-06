import React from 'react'

import logIn from '../../actions/logIn'
import FirebaseAuth from '../misc/FirebaseAuth'
import Error from '../misc/Error'
import Profile from './Profile'
import {
  InternalLink,
} from '../../styles/links'
import {
  Page,
} from '../../styles/layout'

const event = (auth) => {
  if (auth.email === 'zachdt@gmail.com') {
    return <InternalLink to="/new">New</InternalLink>
  } else {
    return 
  }
}
const Account = () => (
  <Page>
    <FirebaseAuth>
      { ({isLoading, error, auth}) => {

        if (isLoading) {
          return <p>loading...</p>
        }

        if (error) {
          return <Error error={error} />
        }

        if (!auth) {
          return <div>
            <p>Log in to see your account</p>
            <button onClick={logIn}>Log in</button>
          </div>
        }

        return <div>
          <Profile auth={auth} />
          <hr />
          { event(auth) }
        </div>

      }}
    </FirebaseAuth>
  </Page>
)

export default Account
