import * as React from "react";
import BigCalendarTemplate from "react-big-calendar";
import * as moment from "moment";
import { Card } from "react-bootstrap";
import styled from "styled-components";

const localizer = BigCalendarTemplate.momentLocalizer(moment);

const BigCalendar = styled(BigCalendarTemplate)`
  min-height: 500px;
`;

const Calendar = () => (
  <Card body className="mt-3">
    <Card.Title>Calendar</Card.Title>
    <BigCalendar
      localizer={localizer}
      events={[]}
      startAccessor="start"
      endAccessor="end"
    />
  </Card>
);

export { Calendar };
