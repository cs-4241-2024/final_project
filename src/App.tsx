import { useSession } from "@clerk/clerk-react";
import Header from "./components/Header";
import WeeklyCalendar from "./components/WeeklyCalendar";

function App() {
    const { isSignedIn } = useSession();

    return (
        <div>
            <Header />
            {isSignedIn && <WeeklyCalendar />}
        </div>
    );
}

export default App;
