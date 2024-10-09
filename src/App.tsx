import { SignedIn, SignedOut } from "@clerk/clerk-react";
import Header from "./components/Header";
import WeeklyCalendar from "./components/WeeklyCalendar";
import CreateEvent from "./createEvent";
import CreateTask from "./createTask";

function App() {
    return (
        <>
            <Header />
            <SignedIn>
                <WeeklyCalendar />
                <CreateEvent />
                <CreateTask />
            </SignedIn>
            <SignedOut>
                <p className="text-center text-4xl pt-40">
                    Please sign in to use the calendar.
                </p>
            </SignedOut>
        </>
    );
}

export default App;
