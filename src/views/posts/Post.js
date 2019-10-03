import React from 'react'
import { FirestoreCollection } from 'react-firestore'

import Error from '../misc/Error'
import FirebaseAuth from '../misc/FirebaseAuth'
import LikeButton from './LikeButton'
import {
  InternalLink,
} from '../../styles/links'
import {
  Page,
} from '../../styles/layout'

const Post = ({match}) => (
  <Page>
    <FirestoreCollection
      path={'events'}
      filter={['slug', '==', match.params.slug]}
    >
      { ({error, isLoading, data}) => {
        if (error) {
          return <Error error={error} />
        }

        if (isLoading) {
          return <p>loading...</p>
        }

        if (data.length === 0) {
          return <Error />
        }

        const event = data[0]

        return <div>
          <h1>{event.title}</h1>
          <p>{event.date}</p>
          <p>{event.content}</p>
          <FirebaseAuth>
            { ({isAdmin}) => {
              return isAdmin ?  <InternalLink to={`/${event.slug}/edit`}>Edit</InternalLink> : ''
            } }
          </FirebaseAuth>
        </div>
      }}
    </FirestoreCollection>
  </Page>
)

export default Post
