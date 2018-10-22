import React, { Component } from "react";
import EventListItem from "./EventListItem";

class EventList extends Component {
  render() {
    const { events, handleDeleteEvent } = this.props;

    return (
      <div>
        {events.map(event => {
          return (
            <EventListItem
              handleDeleteEvent={handleDeleteEvent}
              key={event.id}
              event={event}
            />
          );
        })}
      </div>
    );
  }
}

export default EventList;
