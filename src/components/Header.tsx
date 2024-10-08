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
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <div className="flex flex-row items-center">
                    <p>Welcome {user?.firstName}</p>
                    <UserButton />
                </div>
            </SignedIn>
        </header>
    );
}
