import { toastr } from 'react-redux-toastr'



export const createRoom = (room) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        const authorId = getState().firebase.auth.uid;
        const roomname = room.title
        firestore.collection('rooms').doc(roomname).set({
            ...room,
            authorId: authorId,
            createdAt: new Date()
        }).then( () => {
            dispatch({ type: 'CREATE_ROOM', room });
        }).catch( (err) => {
            dispatch({ type: 'CREATE_ROOM_EROOR', err });
        } )
        
    }
};



export const createChat = (chat) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        const ida = chat.roomid;
        firestore.collection('rooms').doc(ida).collection('chats').add({
            message: chat.message,
            createdAt: new Date()
        }).then( () => {
            dispatch({ type: 'CREATE_CHAT', chat });
            toastr.success('Success', 'message created');
        }).catch( (err) => {
            dispatch({ type: 'CREATE_CHAT_EROOR', err });
        } )
        
    }
};

export const deleteChat = (chat) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        const ida = chat.roomid;
        const eva = chat.chatid;
        firestore.collection('rooms').doc(ida).collection('chats').doc(eva).delete(
        ).then( () => {
            dispatch({ type: 'CREATE_CHAT', chat });
        }).catch( (err) => {
            dispatch({ type: 'CREATE_CHAT_EROOR', err });
        } )
        
    }
};

export const deleteRoom = (rid) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('rooms').doc(rid).delete(
        ).then( () => {
            dispatch({ type: 'CREATE_CHAT', rid });
        }).catch( (err) => {
            dispatch({ type: 'CREATE_CHAT_EROOR', err });
        } )
        
    }
};