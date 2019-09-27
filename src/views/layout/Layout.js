// this Layout component wraps every page with the app header on top
// check out App.js to see how it's used

import React from 'react'
import {createUseStyles} from 'react-jss'

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

const styles = createUseStyles({
  nav: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  events: {
    margin: '20px'
  },
  headerImg: {
    width: '30%',
    height: '30%',
    marginLeft: '-.5em'
  },
  profilePic: {
    borderRadius: '50%',
    marginTop: '.5em'
  }
})

const Layout = ({children}) => {
  const classes = styles()

  return (
    <HeaderFooterWrapper>

      <Header>
        
        <HeaderLink to="/">
          <a>
            <img
              className={classes.headerImg}
              src="https://i.imgur.com/QU0ioai.png"
              title="source: imgur.com"
            />
          </a>
        </HeaderLink>

        <div className={classes.nav} style={{float: 'right'}}>
          {/*<HeaderLink to="/search">
            <span role="img" aria-label="search">🔎</span>
           </HeaderLink>*/}
          {' '}

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
                    width="30" 
                    height="30" 
                  />
                  </span>
                </HeaderLink>
              } else {
                return <button onClick={logIn}>log in</button>
              }
            }}
          </FirebaseAuth>
        </div>
      </Header>

      {children}

      <Footer>
        © {(new Date()).getFullYear()}
      </Footer>

    </HeaderFooterWrapper>
  )
}

export default Layout
