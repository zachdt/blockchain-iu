// this Layout component wraps every page with the app header on top
// check out App.js to see how it's used

import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { NavLink } from 'react-router-dom'

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
  headCont: {
    marginLeft: 'auto',
  },
  nav: {
    float: 'right',
    display: 'flex',
    flexDirection: 'row',
    marginTop: '3em',
    marginRight: 'auto'
  },
  events: {
    color: 'black',
    marginRight: '20px',
    textDecoration: 'none',
    fontSize: '1.2rem'
  },
  headerImg: {
    width: '15em',
    height: '6em',
    marginLeft: '-1em',
  },
  profilePic: {
    borderRadius: '50%',
    marginTop: '-.3em'
  },
  login: {
    cursor: 'pointer',
  },
  loginG: {
    marginRight: '0em',
    marginTop: '0em',
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
        <HeaderLink className={classes.headCont} to="/">
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

          <NavLink className={classes.events} activeStyle={{ textDecoration: 'underline' }} to="/about">
            <span>About</span>
          </NavLink>
          <NavLink className={classes.events} activeStyle={{ textDecoration: 'underline' }} to="/events">
            <span>Events</span>
          </NavLink>
          <NavLink className={classes.events} activeStyle={{ textDecoration: 'underline' }} to="/courses">
            <span>Courses</span>
          </NavLink>
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
                      width="30em" 
                      height="30em" 
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
      <hr />

        © {(new Date()).getFullYear()}<br/>
        <p>by <a className={classes.noLink} href="https://github.com/zachdt" target="_blank">zachdt</a></p>
      </Footer>

    </HeaderFooterWrapper>
  )
}

export default Layout
