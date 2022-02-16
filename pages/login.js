import { useRouter } from "next/router";
import SignInSignUpContainer from "../components/SignInSignUpContainer";

export default function Home({ props }) {

    return (
        <SignInSignUpContainer props={props}/>
        )
    }

