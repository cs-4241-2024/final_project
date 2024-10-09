import { useState } from "react";
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

export default function CreateEvent() {
    const [visible, setVisible] = useState(false);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        // Prevent default browser page refresh
        e.preventDefault();

        // Get form data as an object
        const data = Object.fromEntries(new FormData(e.currentTarget));

        // Send data to server

        setVisible(false);
    };

    return (
        <>
            <Button
                className="button"
                type="button"
                onPress={() => setVisible(true)}
            >
                Create Event
            </Button>
            {visible && (
                <div className="fixed top-0 left-0 w-full h-full content-center">
                    <Form
                        onSubmit={onSubmit}
                        className="flex flex-col gap-5 bg-white mx-auto w-min p-4 border-black border-2 rounded-md"
                    >
                        <TextField
                            name="title"
                            type="text"
                            isRequired
                            className="flex flex-col"
                        >
                            <Label>Event Title</Label>
                            <Input className="pl-2" />
                        </TextField>
                        <TextField name="description" className="flex flex-col">
                            <Label>Description</Label>
                            <TextArea className="pl-2" />
                        </TextField>
                        <TextField
                            name="location"
                            type="text"
                            className="flex flex-col"
                        >
                            <Label>Location</Label>
                            <Input className="pl-2" />
                        </TextField>
                        <DatePicker name="date">
                            <Label>Event Date</Label>
                            <Group className="flex flex-row input justify-between">
                                <DateInput className="pl-2 flex flex-row">
                                    {(segment) => (
                                        <DateSegment segment={segment} />
                                    )}
                                </DateInput>
                                <Button className="px-2">▼</Button>
                            </Group>
                            <Popover className="bg-white border-[1px] border-black p-3 rounded-md">
                                <Dialog>
                                    <Calendar>
                                        <header className="flex flex-row justify-center items-center mx-auto">
                                            <Button
                                                className="px-2"
                                                slot="previous"
                                            >
                                                ◀
                                            </Button>
                                            <Heading />
                                            <Button
                                                className="px-2"
                                                slot="next"
                                            >
                                                ▶
                                            </Button>
                                        </header>
                                        <CalendarGrid>
                                            {(date) => (
                                                <CalendarCell
                                                    className={({
                                                        isSelected,
                                                    }) =>
                                                        "w-8 text-center " +
                                                        (isSelected
                                                            ? "bg-gray-300"
                                                            : "bg-white")
                                                    }
                                                    date={date}
                                                />
                                            )}
                                        </CalendarGrid>
                                    </Calendar>
                                </Dialog>
                            </Popover>
                        </DatePicker>
                        <TimeField name="startTime" isRequired>
                            <Label>Start Time</Label>
                            <DateInput className="flex flex-row input pl-2">
                                {(segment) => <DateSegment segment={segment} />}
                            </DateInput>
                        </TimeField>
                        <TimeField name="howLong" isRequired>
                            <Label>Event Duration</Label>
                            <DateInput className="flex flex-row input pl-2">
                                {(segment) => <DateSegment segment={segment} />}
                            </DateInput>
                        </TimeField>
                        <Button className="button" type="submit">
                            Create Event
                        </Button>
                        <Button
                            className="button"
                            type="button"
                            onPress={() => setVisible(false)}
                        >
                            Cancel
                        </Button>
                    </Form>
                </div>
            )}
        </>
    );
}
