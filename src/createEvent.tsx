import React from "react";
import {
  Button,
  CalendarCell,
  CalendarGrid,
  DateInput,
  DateRangePicker,
  DateSegment,
  Dialog,
  Form,
  Group,
  Heading,
  Input,
  Label,
  Popover,
  RangeCalendar,
  Text,
  TextArea,
  TextField,
  TimeField,
} from "react-aria-components";

export default function CreateEvent() {
  let [submitted, setSubmitted] = React.useState(null);

  let onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Prevent default browser page refresh.
    e.preventDefault();

    // Get form data as an object.
    let data = Object.fromEntries(new FormData(e.currentTarget));

    // Submit to your backend API...
    setSubmitted(data);
  };

  return (
    <Form onSubmit={onSubmit} className="flex flex-col gap-5 m-10">
      <TextField name="title" type="text" isRequired className="flex flex-col">
        <Label>Event Title</Label>
        <Input />
      </TextField>
      <TextField name="description" className="flex flex-col">
        <Label>Description</Label>
        <TextArea />
      </TextField>
      <TextField
        name="location"
        type="text"
        isRequired
        className="flex flex-col"
      >
        <Label>Location</Label>
        <Input />
      </TextField>
      <DateRangePicker startName="startDate" endName="endDate">
        <Label>Event Dates</Label>
        <Group className="flex flex-row input justify-between">
          <div className="flex flex-row gap-2 pl-2">
            <DateInput className="flex flex-row" slot="start">
              {(segment) => <DateSegment segment={segment} />}
            </DateInput>
            <span aria-hidden="true">–</span>
            <DateInput className="flex flex-row" slot="end">
              {(segment) => <DateSegment segment={segment} />}
            </DateInput>
          </div>
          <Button className="px-2">▼</Button>
        </Group>
        <Text slot="description" className="text-xs">
          Start and end dates may be the same.
        </Text>
        <Popover className="bg-white border-[1px] border-black p-3 rounded-md">
          <Dialog>
            <RangeCalendar>
              <header className="flex flex-row justify-center items-center mx-auto">
                <Button className="px-2" slot="previous">
                  ◀
                </Button>
                <Heading />
                <Button className="px-2" slot="next">
                  ▶
                </Button>
              </header>
              <CalendarGrid>
                {(date) => (
                  <CalendarCell className="w-8 text-center" date={date} />
                )}
              </CalendarGrid>
            </RangeCalendar>
          </Dialog>
        </Popover>
      </DateRangePicker>
      <TimeField name="startTime">
        <Label>Start Time</Label>
        <DateInput className="flex flex-row input pl-2">
          {(segment) => <DateSegment segment={segment} />}
        </DateInput>
      </TimeField>
      <TimeField name="endTime">
        <Label>End Time</Label>
        <DateInput className="flex flex-row input pl-2">
          {(segment) => <DateSegment segment={segment} />}
        </DateInput>
      </TimeField>
      <Button className="button" type="submit">
        Create Event
      </Button>
      <Button className="button" type="button">
        Cancel
      </Button>
      {submitted && (
        <div>
          You submitted: <code>{JSON.stringify(submitted)}</code>
        </div>
      )}
    </Form>
  );
}
