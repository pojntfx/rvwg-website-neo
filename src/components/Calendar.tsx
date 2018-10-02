import * as React from "react";
import { Component } from "react";
import BigCalendarTemplate from "react-big-calendar";
import * as moment from "moment";
import { Card } from "react-bootstrap";
import styled from "styled-components";

const localizer = BigCalendarTemplate.momentLocalizer(moment);

const BigCalendar = styled(BigCalendarTemplate)`
  min-height: 500px;
`;

interface ICalendar {
  calendarId: string;
  apiKey: string;
}

const getEvents = async (calendarId, apiKey) => {
  const CURRENT_TIME = new Date().toISOString();
  const CALENDAR_ID = calendarId;
  const API_KEY = apiKey;
  let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?timeMin=${CURRENT_TIME}&key=${API_KEY}`;
  const response = await fetch(url);
  const { items } = await response.json();
  const events = items.map(event => ({
    start: event.start.dateTime,
    end: event.end.dateTime,
    title: event.summary
  }));
  return events;
};

class Calendar extends Component<ICalendar> {
  state = {
    events: []
  };

  async componentDidMount() {
    this.setState({
      events: await getEvents(this.props.calendarId, this.props.apiKey)
    });
  }

  render() {
    return (
      <Card body className="mt-3">
        <Card.Title>Calendar</Card.Title>
        <BigCalendar
          localizer={localizer}
          events={this.state.events}
          startAccessor="start"
          endAccessor="end"
        />
      </Card>
    );
  }
}

export { Calendar };
