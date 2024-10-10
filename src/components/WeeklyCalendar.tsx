import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";

const range = (keyCount: number) => [...Array(keyCount).keys()];

const areDatesSame = (first: Date, second: Date) => {
    return (
        first.getFullYear() === second.getFullYear() &&
        first.getMonth() === second.getMonth() &&
        first.getDate() === second.getDate()
    );
};

const addDateBy = (date: Date, count: number) => {
    const d = new Date(date);
    return new Date(d.setDate(d.getDate() + count));
};

const getSunday = () => {
    const today = new Date();
    const first = today.getDate() - today.getDay();
    return new Date(today.setDate(first));
};

interface EventData {
    _id: string;
    date: string;
    startTime: string;
    title: string;
    howLong: number;
}

interface Event {
    _id: string;
    date: Date;
    title: string;
    howLong: number;
}

interface TaskData {
    _id: string;
    dueDate: string;
    dueTime: string;
    title: string;
}

interface Task {
    _id: string;
    dueDate: Date;
    title: string;
}

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
const HOUR_HEIGHT = 25;
const HOUR_MARGIN_TOP = 15;

function EventComponent({
    event,
    setUpdated,
}: {
    event: Event;
    setUpdated: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const { user } = useUser();

    if (!user) return null;

    const deleteEvent = async () => {
        console.log(event);

        fetch("/event", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${user.id}`,
            },
            body: JSON.stringify(event),
        });

        setUpdated(true);
    };

    return (
        <div
            className="absolute bg-red-500 text-white p-1 rounded-md -mt-2 w-[98%] ml-0.5"
            style={{
                top: `${
                    event.date.getHours() * HOUR_HEIGHT +
                    HOUR_HEIGHT / 2 +
                    event.date.getMinutes() / 2
                }px`,
                height: `${event.howLong * HOUR_HEIGHT}px`,
            }}
        >
            {event.title}
            <button className="float-right pr-2" onClick={deleteEvent}>
                x
            </button>
        </div>
    );
}

function TaskComponent({ task: task }: { task: Task }) {
    const [showTitle, setShowTitle] = useState(false);

    const handleMouseEnter = () => {
        setShowTitle(true);
    };

    const handleMouseLeave = () => {
        setShowTitle(false);
    };

    return (
        <div
            className="absolute bg-red-500 text-white p-1 rounded-md -mt-2 w-[98%]"
            style={{
                top: `${
                    task.dueDate.getHours() * HOUR_HEIGHT +
                    HOUR_HEIGHT / 2 +
                    task.dueDate.getMinutes() / 2
                }px`,
                height: `2px`,
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {showTitle && (
                <div
                    className="absolute bg-gray-700 text-white p-2 rounded-md shadow-md"
                    style={{
                        top: "-40px", // Positioning the Title above the task
                        left: "50%",
                        transform: "translateX(-50%)",
                        whiteSpace: "nowrap",
                    }}
                >
                    {task.title || "No description available"}
                </div>
            )}
        </div>
    );
}

export default function WeeklyCalendar({
    updated,
    setUpdated,
}: {
    updated: boolean;
    setUpdated: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const [sundayDate, setSundayDate] = useState(getSunday());
    const [events, setEvents] = useState<Event[]>([]);
    const [tasks, setTasks] = useState<Task[]>([]);

    const hourNow = new Date().getHours();
    const minutesNow = new Date().getMinutes();

    const nextWeek = () => setSundayDate(addDateBy(sundayDate, 7));
    const prevWeek = () => setSundayDate(addDateBy(sundayDate, -7));

    const { isSignedIn, user } = useUser();

    useEffect(() => {
        if (!isSignedIn) {
            return;
        }

        fetch("/event", {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${user.id}`,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setEvents(
                    data.map((event: EventData) => ({
                        ...event,
                        date: new Date(
                            Date.parse(event.date + " " + event.startTime)
                        ),
                    }))
                );
            });

        fetch("/task", {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${user.id}`,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setTasks(
                    data.map((event: TaskData) => ({
                        ...event,
                        dueDate: new Date(
                            Date.parse(event.dueDate + " " + event.dueTime)
                        ),
                    }))
                );
            });

        setUpdated(false);
    }, [isSignedIn, user, updated, setUpdated]);

    return (
        <>
            <div className="flex justify-center text-lg mt-5 gap-4 items-center">
                <button onClick={prevWeek}>{"<"}</button>
                <p>
                    {sundayDate?.toDateString()} To{" "}
                    {addDateBy(sundayDate, 6).toDateString()}
                </p>

                <button onClick={nextWeek}>{">"}</button>
            </div>

            <div className="w-[calc(100%-30px)] m-4 relative">
                <div className="grid grid-cols-[30px_1fr]">
                    {/* Hours column */}
                    <div className="grid grid-rows-[24] mt-4">
                        {range(24).map((hour: number) => (
                            <div
                                key={hour}
                                className="h-[25px] flex items-center justify-center"
                            >
                                {hour}
                            </div>
                        ))}
                    </div>

                    {/* Days grid */}
                    <div className="grid grid-cols-7">
                        {DAYS.map((day, index) => {
                            return (
                                <div
                                    key={day}
                                    className={`border-t-2 border-l-2 last:border-r-2 border-b-2 border-red-500 first:rounded-s-md last:rounded-e-md relative ${
                                        areDatesSame(
                                            new Date(),
                                            addDateBy(sundayDate, index)
                                        )
                                            ? "bg-pink-100"
                                            : ""
                                    }`}
                                >
                                    <p className="text-xl text-center border-b border-red-500">
                                        {day}
                                    </p>
                                    {events.map((event, eventIndex) => {
                                        return (
                                            areDatesSame(
                                                addDateBy(sundayDate, index),
                                                event.date
                                            ) && (
                                                <EventComponent
                                                    key={eventIndex}
                                                    event={event}
                                                    setUpdated={setUpdated}
                                                />
                                            )
                                        );
                                    })}
                                    {tasks.map((task, taskIndex) => {
                                        return (
                                            areDatesSame(
                                                addDateBy(sundayDate, index),
                                                task.dueDate
                                            ) && (
                                                <TaskComponent
                                                    key={taskIndex}
                                                    task={task}
                                                />
                                            )
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Current time line */}
                <div
                    className="absolute w-full border-2 border-yellow-500 opacity-50"
                    style={{
                        top: `${
                            hourNow * HOUR_HEIGHT +
                            HOUR_MARGIN_TOP +
                            HOUR_HEIGHT / 2 +
                            minutesNow / 2
                        }px`,
                    }}
                ></div>
            </div>
        </>
    );
}
