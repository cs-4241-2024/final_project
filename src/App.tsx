import { SignedIn, SignedOut } from "@clerk/clerk-react";
import Header from "./components/Header";
import WeeklyCalendar from "./components/WeeklyCalendar";
import CreateEvent from "./components/CreateEvent";
import CreateTask from "./components/CreateTask";

function App() {
    return (
        <>
            <Header />
            <SignedIn>
                <WeeklyCalendar />
                <div className="flex flex-row gap-2 p-2">
                    <CreateEvent />
                    <CreateTask />
                </div>
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
