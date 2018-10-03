import * as React from "react";
import { Component } from "react";
import BigCalendarTemplate from "react-big-calendar";
import { Card } from "react-bootstrap";
import styled from "styled-components";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "./Icon";
import * as globalize from "../../.tmp-globalize-webpack/dev-i18n-data";

const localizer = BigCalendarTemplate.globalizeLocalizer(globalize);

const BigCalendar = styled(BigCalendarTemplate)`
  height: 700px;
  overflow-y: auto;
  overflow-x: hidden;
`;

interface ICalendar {
  calendarId: string;
  apiKey: string;
  title: string;
}

const getEvents = async (calendarId, apiKey) => {
  const CURRENT_TIME = new Date().toISOString();
  const CALENDAR_ID = calendarId;
  const API_KEY = apiKey;
  let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?timeMin=${CURRENT_TIME}&key=${API_KEY}`;
  const response = await fetch(url);
  const { items } = await response.json();
  const events = items.map(event => ({
    start: new Date(event.start.dateTime) || new Date(event.start.date),
    end: new Date(event.end.dateTime) || new Date(event.end.date),
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
        <Card.Title>
          <Icon icon={faCalendar} />
          {this.props.title}
        </Card.Title>
        <BigCalendar
          defaultView="agenda"
          views={["month", "agenda"]}
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
