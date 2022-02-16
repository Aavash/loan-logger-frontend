import { useRouter } from "next/router";
import SignInSignUpContainer from "../components/SignInSignUpContainer";

export default function Home() {
    return (
        <SignInSignUpContainer logout={true}/>
        )
    }

