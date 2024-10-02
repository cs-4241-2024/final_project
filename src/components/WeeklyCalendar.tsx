import { useState } from "react";

const range = (keyCount) => [...Array(keyCount).keys()]

const areDatesSame = (first: Date, second: Date) => {
  return first.getFullYear() === second.getFullYear() &&
  first.getMonth() === second.getMonth() &&
  first.getDate() === second.getDate()
}

const addDateBy = (date: Date, count: number) => {
  const d = new Date(date);
  return new Date(d.setDate(d.getDate() + count))
}

const getSunday = () => {
  const today = new Date();
  const first = today.getDate() - today.getDay();
  return new Date(today.setDate(first))
}

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
const HOUR_HEIGHT = 30;
const HOUR_MARGIN_TOP = 15;

export default function WeeklyCalendar() {
    const [sundayDate, setSundayDate] = useState(getSunday());
    const [events, setEvents] = useState([
        { date: new Date(2022, 11, 20, 10), text: "first hi", howLong: 3 },
        { date: new Date(2022, 11, 22, 15), text: "second", howLong: 2 },
        { date: new Date(2022, 11, 27, 11), text: "third", howLong: 2 },
        { date: new Date(2023, 0, 2, 13), text: "forth", howLong: 2 },
    ]);

    const hourNow = new Date().getHours();
    const minutesNow = new Date().getMinutes();

    const nextWeek = () => setSundayDate(addDateBy(sundayDate, 7));
    const prevWeek = () => setSundayDate(addDateBy(sundayDate, -7));

    // const onAddEvent = (date) => {
    //     const text = prompt("text");
    //     const from = prompt("from");
    //     const to = prompt("to");

    //     date.setHours(from);
    //     setEvents((prev) => [...prev, { text, date, howLong: to - from }]);
    // };

    return (
        <>
            <div className="flex justify-around text-lg mt-5">
                <p>today: {new Date().toDateString()}</p>
                <p>from: {sundayDate?.toDateString()}</p>
                <p>to: {addDateBy(sundayDate, 6).toDateString()}</p>

                <button onClick={prevWeek} className="flex items-center">
                    {"<"}
                </button>
                <button onClick={nextWeek} className="flex items-center">
                    {">"}
                </button>
            </div>

            <div className="w-[calc(100%-30px)] border border-solid m-4 relative">
                <div className="grid grid-cols-[30px_1fr]">
                    {/* Hours column */}
                    <div className="grid grid-rows-[24] mt-4">
                        {range(24).map((hour: number) => (
                            <div
                                key={hour}
                                className="h-[30px] flex items-center"
                            >
                                {hour}
                            </div>
                        ))}
                    </div>

                    {/* Days grid */}
                    <div className="grid grid-cols-7">
                        {DAYS.map((day, index) => (
                            <div
                                key={day}
                                // onDoubleClick={() =>
                                //     onAddEvent(addDateBy(mondayDate, index))
                                // }
                                className={`border border-red-500 relative ${
                                    areDatesSame(
                                        new Date(),
                                        addDateBy(sundayDate, index)
                                    )
                                        ? "bg-pink-100"
                                        : ""
                                }`}
                            >
                                <p>{day}</p>
                                {events.map(
                                    (event, eventIndex) =>
                                        areDatesSame(
                                            addDateBy(sundayDate, index),
                                            event.date
                                        ) && (
                                            <div
                                                key={eventIndex}
                                                className="absolute bg-green-500 text-white mx-1 p-1 rounded-md -mt-2"
                                                style={{
                                                    top: `${
                                                        event.date.getHours() *
                                                            HOUR_HEIGHT +
                                                        HOUR_HEIGHT / 2 +
                                                        event.date.getMinutes() /
                                                            2
                                                    }px`,
                                                    height: `${
                                                        event.howLong *
                                                        HOUR_HEIGHT
                                                    }px`,
                                                }}
                                            >
                                                Hi
                                            </div>
                                        )
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Current time line */}
                <div
                    className="absolute w-full border border-orange-500"
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
