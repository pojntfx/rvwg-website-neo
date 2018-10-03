import * as React from "react";
import { Component } from "react";
import BigCalendarTemplate from "react-big-calendar";
import { Card, Alert } from "react-bootstrap";
import styled from "styled-components";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "./Icon";
import * as globalize from "../../.tmp-globalize-webpack/dev-i18n-data";
import Fetch from "react-fetch-component";

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

const getEvents = items => {
  const events = items.map(event => ({
    start: new Date(event.start.dateTime) || new Date(event.start.date),
    end: new Date(event.end.dateTime) || new Date(event.end.date),
    title: event.summary
  }));
  return events;
};

interface IExtendedError extends Error {
  error: IExtendedNestedError;
}

interface IExtendedNestedError extends Error {
  code: string;
}

class Calendar extends Component<ICalendar> {
  render() {
    const CURRENT_TIME = new Date().toISOString();
    const CALENDAR_ID = this.props.calendarId;
    const API_KEY = this.props.apiKey;
    const URL = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?timeMin=${CURRENT_TIME}&key=${API_KEY}`;

    return (
      <Card body className="mt-3">
        <Card.Title>
          <Icon icon={faCalendar} />
          {this.props.title}
        </Card.Title>
        <Fetch url={URL}>
          {({ loading, error, data }) => (
            <div>
              {loading && (
                <Alert dismissible variant="info" className="mb-0">
                  Kalenderdaten werden geladen ...
                </Alert>
              )}
              {error && (
                <Alert dismissible variant="danger" className="mb-0">
                  <Alert.Heading>
                    Oh nein! Es gab einen Fehler beim Laden der Kalender-Daten!
                  </Alert.Heading>
                  <i>
                    Eventuell kann ihnen{" "}
                    <a href="mailto:felicitas@pojtinger">Felicitas Pojtinger</a>, der
                    Entwickler dieser Seite helfen - oder der folgende
                    Fehlerbericht:
                  </i>
                  <br />
                  <b>Fehlercode:</b> {(error as IExtendedError).error.code}
                  <br />
                  <b>Fehlernachricht:</b>{" "}
                  {(error as IExtendedError).error.message}
                </Alert>
              )}
              {data && (
                <BigCalendar
                  defaultView="agenda"
                  views={["month", "agenda"]}
                  localizer={localizer}
                  events={getEvents(data.items)}
                  startAccessor="start"
                  endAccessor="end"
                />
              )}
            </div>
          )}
        </Fetch>
        {/* */}
      </Card>
    );
  }
}

export { Calendar };
