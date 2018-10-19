import React, { Component } from "react";
import { connect } from "react-redux";
import { Segment, Form, Button } from "semantic-ui-react";
import { createEvent, updateEvent } from "../eventActions";
import cuid from "cuid";

const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id;

  let event = {
    title: "",
    date: "",
    city: "",
    venue: "",
    hostedBy: ""
  };

  if (eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventId)[0];
  }

  return {
    event
  };
};

const actions = {
  createEvent,
  updateEvent
};

class EventForm extends Component {
  state = {
    event: {
      event: Object.assign({}, this.props.event)
    }
  };

  onFormSubmit = e => {
    e.preventDefault();
    if (this.state.event.id) {
      this.props.updateEvent(this.state.event);
    } else {
      const newEvent = {
        ...this.state.event,
        id: cuid(),
        hostPhotoURL: "/assets/user.png"
      };
      this.props.createEvent(newEvent);
      this.props.history.push("/events");
    }
  };

  onInputChange = e => {
    const newEvent = this.state.event;
    newEvent[e.target.name] = e.target.value;
    this.setState({ event: newEvent });
  };

  render() {
    const { handleCancel } = this.props;
    const { title, date, city, venue, hostedBy } = this.props.event;

    return (
      <Segment>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Field>
            <label>Event Title</label>
            <input
              name="title"
              defaultValue={title}
              onChange={this.onInputChange}
              placeholder="Name of Event"
            />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input
              name="date"
              defaultValue={date}
              onChange={this.onInputChange}
              type="date"
              placeholder="Event Date"
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              name="city"
              defaultValue={city}
              onChange={this.onInputChange}
              placeholder="City event is taking place"
            />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input
              name="venue"
              defaultValue={venue}
              onChange={this.onInputChange}
              placeholder="Enter the Venue of the event"
            />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input
              name="hostedBy"
              defaultValue={hostedBy}
              onChange={this.onInputChange}
              placeholder="Enter the name of person hosting"
            />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button onClick={handleCancel} type="button">
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  }
}

export default connect(
  mapState,
  actions
)(EventForm);
