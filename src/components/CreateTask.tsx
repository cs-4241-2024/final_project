import { useUser } from "@clerk/clerk-react";
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

export default function CreateTask({
    setUpdated,
}: {
    setUpdated: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const [visible, setVisible] = useState(false);
    const { user, isSignedIn } = useUser();

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        if (!isSignedIn) return;

        // Prevent default browser page refresh.
        e.preventDefault();

        // Get form data as an object.
        const data = Object.fromEntries(new FormData(e.currentTarget));

        // Add user token to object
        data["accessToken"] = user.id;

        // Send data to server
        fetch("/task", {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${user.id}`,
            },
            method: "POST",
            body: JSON.stringify(data),
        });

        setVisible(false);
        setUpdated(true);
    };

    return (
        <>
            <Button
                className="button"
                type="button"
                onPress={() => setVisible(true)}
            >
                Create Task
            </Button>
            {visible && (
                <div className="fixed top-0 left-0 w-full h-full content-center">
                    <Form
                        onSubmit={onSubmit}
                        className="flex flex-col gap-5 bg-white mx-auto w-min p-4 border-black border-2 rounded-md"
                    >
                        <p className="text-xl">Create Task</p>
                        <TextField
                            name="title"
                            type="text"
                            isRequired
                            className="flex flex-col"
                        >
                            <Label>Task Name</Label>
                            <Input className="pl-2" />
                        </TextField>
                        <TextField name="description" className="flex flex-col">
                            <Label>Description</Label>
                            <TextArea className="pl-2" />
                        </TextField>
                        <DatePicker name="dueDate" isRequired>
                            <Label>Task Due Date</Label>
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
                        <TimeField name="dueTime" isRequired>
                            <Label>Due Time</Label>
                            <DateInput className="flex flex-row input pl-2">
                                {(segment) => <DateSegment segment={segment} />}
                            </DateInput>
                        </TimeField>
                        <Button className="button" type="submit">
                            Create Task
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
