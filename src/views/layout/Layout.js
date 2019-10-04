// this Layout component wraps every page with the app header on top
// check out App.js to see how it's used

import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Account from './account.svg'

import logIn from '../../actions/logIn'
import FirebaseAuth from '../misc/FirebaseAuth'
import {
  HeaderFooterWrapper,
  Header,
  Footer,
} from '../../styles/layout'
import {
  HeaderLink,
} from '../../styles/links'

const styles = makeStyles({
  nav: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '2em'
  },
  events: {
    marginRight: '20px'
  },
  headerImg: {
    width: '30%',
    height: '30%',
    marginLeft: '-.5em',
  },
  profilePic: {
    borderRadius: '50%',
    marginTop: '.5em'
  },
  login: {
    cursor: 'pointer',
  },
  loginG: {
    marginRight: '-10em',
    maringTop: '1rem',
  },
  noLink: {
    textDecoration: 'none',
    color: 'black'
  }
})

const Layout = ({children}) => {  
  const classes = styles()

  return (
    <HeaderFooterWrapper >

      <Header>
        
        <HeaderLink to="/">
          <a>
            <img
              className={classes.headerImg}
              src="https://i.imgur.com/QU0ioai.png"
              title="source: imgur.com"
              alt="Blockchain @ IU"
            />
          </a>
        </HeaderLink>

        <div className={classes.nav} style={{float: 'right'}}>
          {/*<HeaderLink to="/search">
            <span role="img" aria-label="search">🔎</span>
           </HeaderLink>*/}
          {' '}

          <HeaderLink className={classes.events} to="/about">
            <span>About</span>
          </HeaderLink>
          <HeaderLink className={classes.events} to="/events">
            <span>Events</span>
          </HeaderLink>
          <FirebaseAuth>
            { ({isLoading, error, auth}) => {
              if (isLoading) {
                return '...'
              }
              if (error) {
                return '⚠️ login error'
              }
              if (auth) {
                return <HeaderLink to={`/account`}>
                  <span role="img" aria-label="account">
                    <img 
                      className={classes.profilePic} 
                      src={auth.photoURL} 
                      alt={auth.displayName} 
                      width="40" 
                      height="40" 
                    />
                  </span>
                </HeaderLink>
              } else {
                return (
                  <a className={classes.login} onClick={logIn}>
                    <img
                      className={classes.loginG}
                      src={Account} 
                      alt={"Account"}
                    />
                  </a>
                )
              }
            }}
          </FirebaseAuth>
        </div>
      </Header>
      {children}

      <Footer>
        © {(new Date()).getFullYear()}<br/>
        <p>by <a className={classes.noLink} href="https://github.com/zachdt" target="_blank">zachdt</a></p>
      </Footer>

    </HeaderFooterWrapper>
  )
}

export default Layout
