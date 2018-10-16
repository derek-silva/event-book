import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import EventList from "../EventList/EventList";
import EventForm from "../EventForm/EventForm";
import cuid from "cuid";

class EventDashboard extends Component {
  state = {
    selectedEvent: null,
    isOpen: false,
    events: [
      {
        id: "1",
        title: "HTOWN SAUCE",
        date: "2018-10-27",
        category: "culture",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
        city: "Houston, Tx",
        venue: "Hermann Park",
        hostedBy: "Alena",
        hostPhotoURL: "https://randomuser.me/api/portraits/women/42.jpg",
        attendees: [
          {
            id: "a",
            name: "Bob",
            photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
          },
          {
            id: "b",
            name: "Chad",
            photoURL: "https://randomuser.me/api/portraits/men/22.jpg"
          }
        ]
      },
      {
        id: "2",
        title: "Let's Get Drinks",
        date: "2018-10-28",
        category: "drinks",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
        city: "Houston, Tx",
        venue: "Little Dipper Bar",
        hostedBy: "Chad",
        hostPhotoURL: "https://randomuser.me/api/portraits/men/22.jpg",
        attendees: [
          {
            id: "b",
            name: "Tom",
            photoURL: "https://randomuser.me/api/portraits/men/22.jpg"
          },
          {
            id: "a",
            name: "Bob",
            photoURL: "https://randomuser.me/api/portraits/women/20.jpg"
          }
        ]
      }
    ]
  };

  handleFormOpen = () => {
    this.setState({
      selectedEvent: null,
      isOpen: true
    });
  };

  handleCancel = () => {
    this.setState({ isOpen: false });
  };

  handleCreateEvent = newEvent => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = "/assets/user.png";

    const updatedEvents = [...this.state.events, newEvent];

    this.setState({ events: updatedEvents, isOpen: false });
  };

  handleDeleteEvent = eventId => () => {
    const updatedEvents = this.state.events.filter(
      event => event.id !== eventId
    );
    this.setState({
      events: updatedEvents
    });
  };

  handleOpenEvent = eventToOpen => () => {
    this.setState({
      selectedEvent: eventToOpen,
      isOpen: true
    });
  };

  handleUpdateEvent = updatedEvent => {
    this.setState({
      events: this.state.events.map(event => {
        if (event.id === updatedEvent.id) {
          return Object.assign({}, updatedEvent);
        } else {
          return event;
        }
      }),
      isOpen: false,
      selectedEvent: null
    });
  };

  render() {
    const { events, isOpen, selectedEvent } = this.state;

    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            handleDeleteEvent={this.handleDeleteEvent}
            handleOpenEvent={this.handleOpenEvent}
            events={events}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button
            onClick={this.handleFormOpen}
            positive
            content="Create Event"
          />
          {isOpen ? (
            <EventForm
              handleUpdateEvent={this.handleUpdateEvent}
              selectedEvent={selectedEvent}
              handleCreateEvent={this.handleCreateEvent}
              handleCancel={this.handleCancel}
            />
          ) : null}
        </Grid.Column>
      </Grid>
    );
  }
}

export default EventDashboard;
