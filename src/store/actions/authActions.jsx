

export const anonymousSignIn = () => {
    return async (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        try {
         const Utente = await firebase.auth().signInAnonymously();
        console.log(Utente);   
        } catch (error) {
            console.log(error);
        }
    }
}

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then(() => {
            dispatch({ type: 'SIGNOUT_SUCCESS' })
        })

    }
}