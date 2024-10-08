import React from "react";
import {
  Button,
  Calendar,
  CalendarCell,
  CalendarGrid,
  DateInput,
  DatePicker,
  DateSegment,
  Dialog,
  Form,
  Group,
  Heading,
  Input,
  Label,
  Popover,
  TextArea,
  TextField,
  TimeField,
} from "react-aria-components";

export default function CreateTask() {
  let [submitted, setSubmitted] = React.useState({});

  let onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Prevent default browser page refresh.
    e.preventDefault();

    // Get form data as an object.
    let data = Object.fromEntries(new FormData(e.currentTarget));

    setSubmitted(data);
  };

  return (
    <Form onSubmit={onSubmit} className="flex flex-col gap-5 m-10">
      <TextField name="title" type="text" isRequired className="flex flex-col">
        <Label>Task Name</Label>
        <Input className="pl-2" />
      </TextField>
      <TextField name="description" className="flex flex-col">
        <Label>Description</Label>
        <TextArea className="pl-2" />
      </TextField>
      <DatePicker>
        <Label>Task Due Date</Label>
        <Group className="flex flex-row input justify-between">
          <DateInput className="pl-2 flex flex-row">
            {(segment) => <DateSegment segment={segment} />}
          </DateInput>
          <Button className="px-2">▼</Button>
        </Group>
        <Popover className="bg-white border-[1px] border-black p-3 rounded-md">
          <Dialog>
            <Calendar>
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
                  <CalendarCell
                    className={({ isSelected }) =>
                      "w-8 text-center " +
                      (isSelected ? "bg-gray-300" : "bg-white")
                    }
                    date={date}
                  />
                )}
              </CalendarGrid>
            </Calendar>
          </Dialog>
        </Popover>
      </DatePicker>
      <TimeField name="dueTime">
        <Label>Due Time</Label>
        <DateInput className="flex flex-row input pl-2">
          {(segment) => <DateSegment segment={segment} />}
        </DateInput>
      </TimeField>
      <Button className="button" type="submit">
        Create Task
      </Button>
      <Button className="button" type="button">
        Cancel
      </Button>
      {submitted && Object.keys(submitted).length !== 0 && (
        <div>
          You submitted: <code>{JSON.stringify(submitted)}</code>
        </div>
      )}
    </Form>
  );
}
