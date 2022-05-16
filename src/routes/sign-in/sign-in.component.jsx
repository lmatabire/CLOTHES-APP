// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth'

import {
    // auth,
    signInWithGooglePopup,
    // signInWithGoogleRedirect,
    createUserDocumentFromAuth
} from "../../utils/firebase/firebase.util";

import SignUpForm from '../../components/sign-up-form/sign-up-form.component'; 

const SignIn = () => {
    // useEffect(async () => {
    //     const response = await getRedirectResult(auth);
    //     console.log(response);
    // }, [])

    // useEffect(() => {
    //     (async () => {
    //         const response = await getRedirectResult(auth);
    //         if(response) {
    //             const userDocRef = await createUserDocumentFromAuth(response.user);
    //         }
    //     })();
    // }, [])


    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sing in with Google Popup</button>
            {/* <button onClick={signInWithGoogleRedirect}>Sing in with Google Redirect</button> */}
            <SignUpForm />
        </div>
    );
};

export default SignIn;