// the main routes of our app are defined here using react-router
// https://reacttraining.com/react-router/web/example/basic

import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Account from './account/Account'
import EventsList from './events/EventsList'
import About from './about/About'
import Landing from './landing/Landing'
import EventNew from './posts/EventNew'
import Search from './search/Search'
import PostEdit from './posts/PostEdit'
import Post from './posts/Post'
import Error from './misc/Error'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/events" component={EventsList} />
    <Route path="/account" component={Account} />
    <Route path="/about" component={About} />

    <Route path="/new" component={EventNew} />
    <Route path="/search" component={Search} />
    <Route path="/:slug/edit" component={PostEdit} />
    <Route path="/:slug" component={Post} />
    <Route component={Error} />
  </Switch>
)

export default Routes
