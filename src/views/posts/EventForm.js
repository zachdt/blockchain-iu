// This is an uncontrolled React form, which is way simpler than
// the normal React controlled form
// https://reactjs.org/docs/uncontrolled-components.html
//
// You can use browser form validation these days, and just
// get the values from the form on submit.

import React from 'react'

import Button from '@material-ui/core/Button'


import {
  FormRow,
  FormLabel,
  TextInput,
  TextArea,
} from '../../styles/forms'

class EventForm extends React.Component {

  onSubmit = event => {
    event.preventDefault()
    const {title, content, date, time, loc, img, rsvp, past} = event.target.elements
    const values = {
      title: title.value,
      content: content.value,
      date: date.value,
      time: time.value,
      loc: loc.value,
      img: img.value,
      rsvp: rsvp.value,
      past: past.value
    }
    this.props.onSubmit(values)
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <FormRow>
          <FormLabel for="title">Title</FormLabel>
          <TextInput type="text" name="title" defaultValue={this.props.event ? this.props.event.title : ''} required />
        </FormRow>

        <FormRow>
          <FormLabel for="content">Content</FormLabel>
          <TextArea type="text" name="content" defaultValue={this.props.event ? this.props.event.content : ''} required />
        </FormRow>

        <FormRow>
          <FormLabel for="date">Date</FormLabel>
          <TextInput type="text" name="date" defaultValue={this.props.event ? this.props.event.date : ''} required />
        </FormRow>

        <FormRow>
          <FormLabel for="time">Time</FormLabel>
          <TextInput type="text" name="time" defaultValue={this.props.event ? this.props.event.time : ''} required />
        </FormRow>
        
        <FormRow>
          <FormLabel for="loc">Location</FormLabel>
          <TextInput type="text" name="loc" defaultValue={this.props.event ? this.props.event.loc : ''} required />
        </FormRow>

        <FormRow>
          <FormLabel for="img">Image Link</FormLabel>
          <TextInput type="text" name="img" defaultValue={this.props.event ? this.props.event.img : ''} required />
        </FormRow>

        <FormRow>
          <FormLabel for="rsvp">RSVP Link</FormLabel>
          <TextInput type="text" name="rsvp" defaultValue={this.props.event ? this.props.event.rsvp : ''} required />
        </FormRow>

        <FormRow>
          <FormLabel for="past">Already done?</FormLabel>
          <TextInput type="text" name="past" defaultValue={this.props.event ? this.props.event.past : ''} />
        </FormRow>

        <Button type="submit">Save Event</Button>
      </form>
    )
  }
}

export default EventForm
