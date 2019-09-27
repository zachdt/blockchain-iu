// the main file in our front-end app
// create-react-app expects a file in src/index.js and loads everything from here

import Firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './views/App'

console.log('create-react-app env:', process.env.NODE_ENV)
console.log('firefly project:', process.env.REACT_APP_ENV)

// connect our app to firebase 
const dbConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
}
Firebase.initializeApp(dbConfig)

// temporary config to squash error date warning
// TODO - remove once this is the firebase default behavior
// https://firebase.google.com/docs/reference/js/firebase.firestore.Settings#~timestampsInSnapshots
Firebase.firestore().settings({timestampsInSnapshots: true})


// render the Aphp component to our document root with React
ReactDOM.render(<App />, document.getElementById('root'))
