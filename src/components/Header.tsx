import {
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
    useUser,
} from "@clerk/clerk-react";

export default function Header() {
    const { user } = useUser();

    return (
        <header>
            <div className="flex flex-row py-3 px-6 bg-pink-200 border-b border-red-500">
                <p className="text-xl">DayTime</p>
                <div className="flex flex-row items-center w-full justify-end gap-2">
                    <SignedOut>
                        <SignInButton />
                    </SignedOut>
                    <SignedIn>
                        <p>Welcome {user?.firstName}</p>
                        <UserButton />
                    </SignedIn>
                </div>
            </div>
        </header>
    );
}
